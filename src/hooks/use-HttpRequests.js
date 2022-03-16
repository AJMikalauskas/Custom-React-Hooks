import axios from "axios";
//React, useCallback
import  { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

//param test getReq, for showing regular fetch request or not
const useAxiosApi = (url,method,textToSendInForPostReq) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);

  //useEffect(() => {
  // (
  //useCallback(
  // const testFn = useCallback(async 
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchData = async() => {
    try {
    //   const response = await fetch(
    //     //"https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com//tasks.json"
    //     url,
    //     {
    //       method: method,
    //       body: JSON.stringify({ text: textToSendInForPostReq }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
      //     if(getReq)
      //     {
      //         const response = await fetch("https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com//tasks.json");
      //     }
      //     else {
      //   const response = await fetch(
      //     "https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com//tasks.json",
      //     {
      //         requestInfoObj
      //     }
      //   )
      // }
      const response = await axios({
          method: method,
          url: url, 
          data: textToSendInForPostReq
      });
    //   console.log(response);
    //   if (!response.ok) {
    //     throw new Error("Request failed!");
    //   }
      //const data = await response.json();
      const data = await response?.data;
      setApiData(data);
      console.log(data);
      setIsLoading(false);
      //   setDataStorage(data);
      // This is from NewTask.js
      //const generatedId = data.name; // firebase-specific => "name" contains generated id
      //const createdTask = { id: generatedId, text: taskText };
      //props.onAddTask(createdTask);

      // This is from App.js
      // const loadedTasks = [];
      // for (const taskKey in data) {
      //  loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      // }
      // setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
      setIsLoading(false);
    }
    //setIsLoading(false);
    };

    fetchData();
  },[method, textToSendInForPostReq, url]);

//   useEffect(() => {
//     testFn();
//   }, [testFn]);
  //testFn();
  //)()
  //   }, [data, requestInfoObj]);
  //   useEffect(() => {
  //       testFn();
  //   },[testFn]);

  return { apiData, error, isLoading };
};

export default useAxiosApi;
