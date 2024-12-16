import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Parent Component
export const ImperativeHandleExample = () => {
  const childRef = useRef();

  return (
    <div>
      <CustomInput ref={childRef} />
      <button onClick={() => childRef.current.focusInput()}>Focus Input</button>
      <button onClick={() => childRef.current.clearInput()}>Clear Input</button>
    </div>
  );
};

// Child Component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose methods or properties to the parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus(); // Method to focus the input
    },
    clearInput: () => {
      inputRef.current.value = ""; // Method to clear the input
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Type something..." />;
});
