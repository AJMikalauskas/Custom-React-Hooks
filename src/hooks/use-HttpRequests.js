//import axios from "axios";
//React, useCallback
import { useState, useEffect, useCallback } from "react";
//import { useEffect } from "react/cjs/react.production.min";

//param test getReq, for showing regular fetch request or not
// Replace multiple sent in params with just an object/dictionary or JSON object sent in with dot notation to select specifics
// Function Param to use the data, but you can just be able to use a function in app.js to use the data correctly instead.
const useFetchApi = () => {
  // param ??? body ??? changeDataViaFn ??? headers 
    // Semi-correct answer using url, method, body, changeDataViaFn
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //const [apiData, setApiData] = useState(null);

  //useEffect(() => {
  // (
  //useCallback(
  // const testFn = useCallback(async
  //useEffect(() => {
  const fetchData = useCallback(async (requestConfig,changeDataViaFn) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        //"https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com//tasks.json"
        requestConfig.url,
        //url,
        {
              // The ?, : is a very effective way of doing things, object can only be sent into fetchData function not useAxiosApi
            //method: method,
          //? method : "GET", 
          method: requestConfig.method ? requestConfig.method : "GET",
          //headers: {}, 
          //? headers : {}, 
            //  {
            //     "Content-Type": "application/json",
            //   }
          headers: requestConfig.headers ? requestConfig.headers : {},
            //body: body
            // JSON.stringify(body) 
            //? JSON.stringify(body) : null
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          // body: JSON.stringify({ text: textToSendInForPostReq })
        }
      );
      // Code down below went here but commented out
      if (!response.ok) {
        throw new Error("Request Failed!");
      }
      //const data = await response?.data;
      //setApiData()
      const data = await response.json();
      //setApiData(data);
      changeDataViaFn(data)
      //changeDataViaFn(data,requestConfig.body);
      //changeDataViaFn(data);
      //changeDataViaFn(data);
      //setIsLoading(false);
      //setApiData(data);
      //console.log(data.name);
      //setIsLoading(false);
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
      //setIsLoading(false);
    }
    setIsLoading(false);
  }, []);
  return { fetchData, error, isLoading };
};

export default useFetchApi;
// try code
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
// const response = await axios({
//     method: method,
//     url: url,
//     data: textToSendInForPostReq
// });
//   console.log(response);
// if (response.status !== 200) {
//   throw new Error('Request failed!');
// }
//const data = await response.json();
//, [requestConfig.url,requestConfig.headers,requestConfig.method,requestConfig.body]);

//fetchData();
//},[changeDataViaFn, requestConfig.body, requestConfig.headers, requestConfig.method, requestConfig.url]);

//   useEffect(() => {
//     testFn();
//   }, [testFn]);
//testFn();
//)()
//   }, [data, requestInfoObj]);
//   useEffect(() => {
//       testFn();
//   },[testFn]);

//return { apiData, error, isLoading };
//};

