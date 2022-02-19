import { Button } from "@mui/material";
import { useState } from "react";
import ".././index.css";

export default function LightBulb(props) {
  const [on, setOn] = useState(false);

  function handleClick() {
    setOn(!on);
  }

  return (
    <>
      <Button color="secondary" variant="contained" onClick={handleClick}>
        Switch {on ? "off" : "on"}
      </Button>
      <div className={`bulb ${on ? "on" : ""}`}>Bulb</div>
    </>
  );
}
