import { Button } from "@mui/material";
import { useReducer } from "react";

function counterReducer(store, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...store, count: store.count + 1 };
    case "DECREMENT":
      return { ...store, count: store.count - 1 };
    default:
      return store;
  }
}

export default function CounterUsingUseReducer(props) {
  const [store, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      {store.count}
      <div>
        <Button
          onClick={() => dispatch({ type: "INCREMENT" })}
          color="primary"
          variant="contained"
        >
          Increment
        </Button>
        <Button
          onClick={() => dispatch({ type: "DECREMENT" })}
          color="primary"
          variant="contained"
        >
          Decrement
        </Button>
      </div>
    </>
  );
}
