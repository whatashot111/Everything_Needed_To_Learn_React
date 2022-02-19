import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./common/movies.css";

export default function TheHeader(props) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  }

  return (
    <div className="header">
      {props.heading}
      <Button
        onClick={handleLogout}
        style={{ position: "absolute", top: "24px", right: "24px" }}
        color="secondary"
        variant="contained"
      >
        Logout
      </Button>
    </div>
  );
}
