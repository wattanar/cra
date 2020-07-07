import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Button } from "react-bootstrap";
import { INCREMENT, DECREMENT } from "../reducers/counter/counterReducerType";

function Counter() {
  const { counter } = useContext(MainContext);
  const [counterState, counterDispatch] = counter;

  return (
    <React.Fragment>
      <div className="text-center">
        <h1>Counter</h1>
        <Button
          variant="danger"
          className="mr-3"
          onClick={() => counterDispatch({ type: DECREMENT })}
        >
          -
        </Button>
        {counterState.count}
        <Button
          variant="primary"
          className="ml-3"
          onClick={() => counterDispatch({ type: INCREMENT })}
        >
          +
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Counter;
