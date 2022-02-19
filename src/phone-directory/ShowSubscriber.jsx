import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import TheHeader from "./TheHeader";
import "./css/show-subscriber.css";
import { connect } from "react-redux";

function ShowSubscriber(props) {
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
                onClick={() => props.onDelete(contact.id)}
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

function mapStateToProps(store) {
  return { subscribersList: store.subscribersList };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: function (id) {
      dispatch({ type: "DELETE_SUBSCRIBER", payload: id });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowSubscriber);
