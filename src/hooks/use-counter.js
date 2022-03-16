import React, { useState, useEffect } from "react";

// Have to have "use" at beginning of this function name to let react know it's a hook
    // Pass in params to this function to have interchanging logic of -1 and +1, can pass in false and true with if statements below
        // to show the change in logic.
const useCounter = (determineCounterDirectionFn) => {
  // This state if used in mutliple components is a different state in each of the components it is created in
  // This is like the list item from the food order app I struggled with. Only the logic is passed, no the actual same state to make it global
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        //Boolean Logic
    //   if (counterIsPositive) {
    //     setCounter((prevCounter) => prevCounter + 1);
    //   } else if(!counterIsPositive) {
    //     setCounter((prevCounter) => prevCounter - 1);
    //   }
        // Function/Anonymous Function Logic
        setCounter(determineCounterDirectionFn);
    }, 1000);

    return () => clearInterval(interval);
    // It does seem that any param you pass into the function needs to be passed as a dependency to useEffect and reasonably so
        // If the function param changes, the useEffect reruns which makes sense
  }, [determineCounterDirectionFn]);

  // This returns the counter state to the ForwardCounter.js since this custom hook is being used in there,
  // the counter state is read in the JSX of ForwardCounter.js;
  return counter;
};

export default useCounter;
