import { MenuItem, Select } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { getCities, getStates } from "./common/data";

export default function States(props) {
  const [stateNames, setStateNames] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cityNames, setCityNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCity, setLoadingCity] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStates()
      .then((response) => setStateNames(response))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoadingCity(true);
    getCities(selectedState)
      .then((response) => setCityNames(response))
      .catch((e) => console.log(e))
      .finally(() => setLoadingCity(false));
  }, [selectedState]);

  if (loading) {
    return <div>{<CircularProgress />}</div>;
  }

  return (
    <>
      <Select
        style={{ margin: "16px" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedState}
        label="States"
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {stateNames.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
      {loadingCity ? (
        <div>{<CircularProgress color="error" />}</div>
      ) : (
        <div>
          {cityNames.map((city) => (
            <div style={{ margin: "16px" }} key={city}>
              {city}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
