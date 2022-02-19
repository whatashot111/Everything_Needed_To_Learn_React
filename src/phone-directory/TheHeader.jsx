import "./css/header.css";

export default function TheHeader(props) {
  return (
    <div className="header">
      <h2>{props.heading}</h2>
    </div>
  );
}
