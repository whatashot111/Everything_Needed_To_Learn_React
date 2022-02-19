import { Button } from "@mui/material";
import React, { useState } from "react";

export default function CounterFunction() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      {count}
      <div>
        <Button onClick={handleIncrement} color="primary" variant="contained">
          Increment
        </Button>
        <Button onClick={handleDecrement} color="primary" variant="contained">
          Decrement
        </Button>
      </div>
    </>
  );
}
