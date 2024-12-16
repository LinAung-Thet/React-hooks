import React, { forwardRef, useRef, useImperativeHandle } from "react";

const MultiRefComponent = forwardRef((props, ref) => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  useImperativeHandle(ref, () => ({
    focusFirstInput: () => {
      inputRef1.current.focus();
    },
    focusSecondInput: () => {
      inputRef2.current.focus();
    },
    clearBothInputs: () => {
      inputRef1.current.value = "";
      inputRef2.current.value = "";
    },
  }));

  return (
    <div>
      <input ref={inputRef1} type="text" placeholder="First Input" />
      <input ref={inputRef2} type="text" placeholder="Second Input" />
    </div>
  );
});

export const Parent = () => {
  const componentRef = useRef();

  return (
    <div>
      <MultiRefComponent ref={componentRef} />
      <button onClick={() => componentRef.current.focusFirstInput()}>
        Focus First Input
      </button>
      <button onClick={() => componentRef.current.focusSecondInput()}>
        Focus Second Input
      </button>
      <button onClick={() => componentRef.current.clearBothInputs()}>
        Clear Both Inputs
      </button>
    </div>
  );
};

// export default Parent;
