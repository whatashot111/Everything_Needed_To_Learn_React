import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import TheHeader from "./TheHeader";
import "./css/show-subscriber.css";

export default function ShowSubscriber(props) {
  const navigate = useNavigate();

  function navigateToAddSubscriber() {
    navigate("/add", { replace: true });
  }

  return (
    <>
      <TheHeader heading={"Show Subscribers"} />
      <Button
        onClick={navigateToAddSubscriber}
        style={{ margin: "16px" }}
        color="primary"
        variant="contained"
      >
        Add Subscriber
      </Button>
      <div className="grid-main-container">
        <div className="grid-container">
          <span className="heading grid-item">Name</span>
          <span className="heading grid-item">Phone</span>
        </div>
        {props.subscribersList.map((contact) => (
          <div key={contact.id} className="grid-container">
            <span className="grid-item">{contact.name}</span>
            <span className="grid-item">{contact.phone}</span>
            <span className="grid-item">
              <Button
                onClick={() => props.handleDelete(contact.id)}
                color="secondary"
                variant="contained"
              >
                Delete
              </Button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
