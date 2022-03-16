import { useCallback, useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
    // Need to output state of counter which is in use-counter.js to show in JSX here.
      // Do so by returning counter in the use-counter.js
        // Since the counter state from use-counter.js is returned, the const set here is equal to that and can be put in the JSX
          // Boolean as true or false passed in is one way to change direction, but you can also pass in a function
  //const counterStateReturned = useCounter(true);
    // You can also pass in just the logic of an anonymous function as (prevCounter) => prevCounter + 1 as the param
      //This is seen in BackwardCounter.js
  const addFn = (prevCounter) => prevCounter + 1;
  const counterStateReturned = useCounter(addFn);

  
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counterStateReturned}</Card>;
};

export default ForwardCounter;
