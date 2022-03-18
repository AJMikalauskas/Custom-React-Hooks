import React, { useEffect, useState, useCallback } from "react";
import useFetchApi from "./hooks/use-HttpRequests";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import axios from "axios";

function App() {
    //   const useData = useCallback((dataFromGetReq) => {
    //   const loadedTasks = [];
    //   for (const taskKey in dataFromGetReq) {
    //     loadedTasks.push({ id: taskKey, text: dataFromGetReq[taskKey].text });
    //   }
    //     setTasks(loadedTasks);
    //     console.log(loadedTasks);
    // },[]);
    const [tasks, setTasks] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);
  // const [tasks, setTasks] = useState([]);
  //const loadedTasks = [];
  //const method = "GET";
  //const headers = {};
    //const method = "GET";
  //const taskTestArr = [];
  //const fetchTasks = async () => {
  //setIsLoading(true);
  //setError(null);
  //try {
  //trying Axios on both NewTask.js and App.js
  //const response = await axios.get(
  //  'https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com/tasks.json'
  //);
  // const useData = (dataFromGetReq) => {
  //   //const loadedTasks = [];
  //   for (const taskKey in dataFromGetReq) {
  //     loadedTasks.push({ id: taskKey, text: dataFromGetReq[taskKey].text });
  //   }
  //     //setTasks(loadedTasks);
  //     console.log(loadedTasks);
  // };
  // const requestInfo = {
  //   url: 'https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com/tasks.json',
  //   method: 'GET',
  //   headers: {},
  //   body: null,

  // };
  // if(method === "GET")
  // {
  //   // headers = {
  //   //   "Content-Type": "application/json",
  //   // }
  // }
  const { fetchData, error, isLoading } = useFetchApi(
    // You cannot send up an object via this or else it will cause an infinite loop, that's
      // why he sends it up via the function fetchData in the useEffect() below, - only send in object with properties for now
    // "https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com/tasks.json",
    // method,
    // //headers,
    // null,
    // useData
  );
  // This supposedly would have went in the useAxiosApi call
  // {
  //   url: 'https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com/tasks.json',
  //   // method: "GET",
  //   // headers: {
  //   //   "Content-Type": "application/json"
  //   // },
  //   // body: {}
  // }
  // ,useData
  // I tried some apiData but it eventually didn't work because state makes the entire component reload
  //console.log(apiData);
  //taskTestArr.push(apiData);
  // for (const taskKey in apiData) {
  //  taskTestArr.push({ id: taskKey, text: apiData[taskKey].text });
  //  //setTasks(taskTestArr);
  // }
  // //setTasks(taskTestArr);
  // console.log(taskTestArr);
  //         // (dataFromGetReq) => {
  //   for (const taskKey in dataFromGetReq) {
  //     loadedTasks.push({ id: taskKey, text: dataFromGetReq[taskKey].text });
  //     console.log(loadedTasks);
  //   }
  // }
  //useData
  // {
  //     "https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com/tasks.json",
  //     "get",
  //     {}
  // }

  // useEffect(() =>
  // {
  //   // Creates Infinite loop if fetchData() is a dependency, yet it recommends for it to be a depenendency
  //     // calls fetchData from use-HttpRequests.js, setIsLoading and setError will be called and change a state causing the rerendering
  //       // of App.js from use-HttpRequests.js - This is a major problem
  // JS treats this as a new function even if it has the same logic, this is from the useAxiosApi - reference values
  //   fetchData();
  // }, [])
  //console.log(apiData);

  //if (response.status !== 200) {
  //  throw new Error('Request failed!');
  //}
  //response.json() is the fecth api, response.data is the axios npm package
  //const data = await response.data;
  //console.log(data.name);
  //console.log(response.statusCode);
  //console.log(loadedTasks);

  // for (const taskKey in apiData) {
  //   loadedTasks.push({ id: taskKey, text: apiData[taskKey].text });
  // }
  //   setTasks(loadedTasks);
  //   console.log(loadedTasks);
  // } catch (err) {
  //   setError(err.message || 'Something went wrong!');
  // }
  // setIsLoading(false);
  //};

  // useEffect(() => {
  //   fetchTasks();
  // //   const {apiData, error, isLoading} = useAxiosApi(
  // //     "https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com//tasks.json",
  // //     "GET",
  // //     {}
  // // );
  // }, []);
  //   const {apiData, error, isLoading} = useAxiosApi(
  //     "https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com/tasks.json",
  //     "GET",
  //     {}
  // );
  //   const [tasks, setTasks] = useState([]);
  //   const loadedTasks = [];

  //   for (const taskKey in apiData) {
  //     loadedTasks.push({ id: taskKey, text: apiData[taskKey].text });
  //   }

  //   setTasks(loadedTasks);
// const performData = () => {
//       const loadedTasks = [];
//       for (const taskKey in apiData) {
//         loadedTasks.push({ id: taskKey, text: apiData[taskKey].text });
//       }
//       setTasks(loadedTasks);
//       console.log(loadedTasks);
//     };
    //   const performData = useCallback(() => {
    //   const loadedTasks = [];
    //   for (const taskKey in apiData) {
    //     loadedTasks.push({ id: taskKey, text: apiData[taskKey].text });
    //   }
    //     //setTasks(loadedTasks);
    //     console.log(loadedTasks);
    // },[apiData]);  
    // const useData = useCallback(() => {
    //   const loadedTasks = [];
    //   for (const taskKey in apiData) {
    //     loadedTasks.push({ id: taskKey, text: apiData[taskKey].text });
    //   }
    //     //setTasks(loadedTasks);
    //     console.log(loadedTasks);
    // },[apiData]);
    // const testUsingData = useCallback(() => {
    //   const loadedTasks = [];
    //   for (const taskKey in apiData) {
    //     loadedTasks.push({ id: taskKey, text: apiData[taskKey].text });
    //   }
    //     //setTasks(loadedTasks);
    //     console.log(loadedTasks);
    // },[]);
    useEffect(() => {
    //   const performData = useCallback((dataFromGetReq) => {
    //   const loadedTasks = [];
    //   for (const taskKey in dataFromGetReq) {
    //     loadedTasks.push({ id: taskKey, text: dataFromGetReq[taskKey].text });
    //   }
    //     setTasks(loadedTasks);
    //     console.log(loadedTasks);
    // },[]);
    // If useData in this, pass useData into fetchData()
      const testUsingData = (dataFromGetReq) => {
     // You can use callBack for outside this function at the top, but if it's in here, no useCallback() is necessary
      const loadedTasks = [];
      for (const taskKey in dataFromGetReq) {
        loadedTasks.push({ id: taskKey, text: dataFromGetReq[taskKey].text });
      }
        setTasks(loadedTasks);
        console.log(loadedTasks);
    };
    // Just pass in url for now, no need for other properties since it's only a GET request
    fetchData({url: 'https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com/tasks.json'}, testUsingData);
      // You cannot use useCallback for the performData function above and place it in here
        // When this runs, it will call the function which will eventually change the tasks state
          // By changing the task state, the component will re-render and this useEffect() will run again and cause an infinite loop
    //performData();
    //testUsingData();
  }, [fetchData]);

  // const useData = //useCallback(
  //   () => {
  //   console.log(apiData);
  //   const loadedTasks = [];
  //   for (const taskKey in apiData) {
  //     loadedTasks.push({ id: taskKey, text: apiData[taskKey].text });
  //   }
  //     setTasks(loadedTasks);
  //     console.log(loadedTasks);
  // }
  //,[apiData]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
    //taskTestArr.push(task);
  };

  // function addTask(task)
  // {
  //   taskTestArr((prevTasks) => prevTasks.concat(task));
  // }

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        // onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
