import { Button } from "@mui/material";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import TheHeader from "./TheHeader";

export default function AddSubscriber(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function navigateBackToShowSubscriber() {
    navigate("/", { replace: true });
  }

  function handleSubmit() {
    props.handleAdd(name, phone);
    navigate("/", { replace: true });
  }

  return (
    <>
      <TheHeader heading={"Add Subscribers"} />
      <Button
        onClick={navigateBackToShowSubscriber}
        style={{ margin: "16px" }}
        color="secondary"
        variant="outlined"
      >
        Back
      </Button>
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          style={{ margin: "16px" }}
          label="Name"
          type="text"
          placeholder="Enter Name.."
          validators={["required", "minStringLength: 3"]}
          errorMessages={[
            "Mandatory Field",
            "Minimum 3 Character Name is required",
          ]}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextValidator
          style={{ margin: "16px" }}
          label="Phone"
          type="text"
          placeholder="Enter Phone.."
          validators={["required"]}
          errorMessages={["Mandatory Field"]}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div style={{ margin: "16px" }}>
          <h3 style={{ color: "royalblue" }}>Subscriber to be added:</h3>
          <p>Name: {name}</p>
          <p>Phone: {phone}</p>
        </div>
        <Button
          type="submit"
          style={{ margin: "16px" }}
          color="secondary"
          variant="contained"
        >
          Add Subscriber
        </Button>
      </ValidatorForm>
    </>
  );
}
