import { useEffect, useRef, useState } from "react";

export const RefExample = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
    console.log(previousCount.current);
    console.log("Completed useEffect of count.");
  }, [count]);

  useEffect(() => {
    console.log("Completed useEffect of previousCount.current.");
  }, [previousCount.current]);

  return (
    <>
      <p> Count: {count}</p>
      <p> Previous Count: {previousCount.current} </p> 
      <button onClick={() => setCount(prev => {
        prev = prev + 1;
        console.log("Count updated.")
        return prev;
      })}> Increment</button>
    </>
  );
};
