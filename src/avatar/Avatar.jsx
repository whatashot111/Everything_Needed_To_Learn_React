import { Link } from "react-router-dom";
import "../index.css";

export default function Avatar(props) {
  const initials = props.name
    .split(" ")
    .map((segment) => segment[0])
    .join("");

  return (
    <>
      <Link
        style={{ margin: "16px", textDecoration: "none", color: "black" }}
        to={`avatar/${props.id}/${props.name}`}
      >
        <div
          style={{ margin: "16px" }}
          className={`avatar ${props.isMarried ? "married" : ""}`}
        >
          {initials}
        </div>
        {props.name}, {props.age}
      </Link>
    </>
  );
}
