import { Button } from "@mui/material";
import { connect } from "react-redux";

function CounterRedux(props) {
  return (
    <>
      {props.count}
      <div>
        <Button onClick={props.onIncrement} color="primary" variant="contained">
          Increment
        </Button>
        <Button onClick={props.onDecrement} color="primary" variant="contained">
          Decrement
        </Button>
      </div>
    </>
  );
}

function mapStateToProps(store) {
  return { count: store.count };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: function () {
      dispatch({ type: "INCREMENT" });
    },
    onDecrement: function () {
      dispatch({ type: "DECREMENT" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
