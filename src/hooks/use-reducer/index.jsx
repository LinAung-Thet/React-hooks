import { useReducer, useState } from "react";

const reducer = (state2, action2) => {
  switch (action2.type1) {
    case "increment":
      return { count1: state2.count1 + 1 };
    case "decrement":
      return { count1: state2.count1 - 1 };
    case "double":
      return { count1: state2.count1 * 2 };
    default:
      console.log("No action type: " + action2.type1);
      return { count1: state2.count1 };
  }
};

export const ReducerExample = () => {
  const [state1, dispatch] = useReducer(reducer, { count1: 0 });

  return (
    <div>
      <p>Count: {state1.count1}</p>
      <button onClick={() => dispatch({ type1: "increment" })}>+</button>
      <button onClick={() => dispatch({ type1: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type1: "double" })}>*</button>
    </div>
  );
};
