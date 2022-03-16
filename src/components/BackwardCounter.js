//import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  // You can use not only a boolean to change the useCounter custom hook, but you can also use a minor anonymous/named function
    // can pass in param or creat outside and call in param.
  //const counterStateReturned = useCounter(false);
  const counterStateReturned = useCounter((prevCounter) => prevCounter -1); 
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counterStateReturned}</Card>;
};

export default BackwardCounter;
