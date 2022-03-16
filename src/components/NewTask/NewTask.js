import { useState } from "react";

import useAxiosApi from "../../hooks/use-HttpRequests";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [text, setText] = useState("");

  const taskHandler = (taskText) => {
    setText(taskText);
    console.log(taskText);
  }
  const {apiData, error, isLoading} = useAxiosApi(
    "https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com//tasks.json",
    "POST",
    {text: text}
);

  // const requestInfoObj = {
  //   method: "POST",
  //   body: JSON.stringify({ text: text }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };


    const generatedId = apiData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: text };
    props.onAddTask(createdTask);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const taskHandler = async(taskText) => {

  //   // const enterTaskHandler = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-tasks-http-custom-hook-default-rtdb.firebaseio.com//tasks.json',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({ text: taskText }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const generatedId = data.name; // firebase-specific => "name" contains generated id
  //     console.log(generatedId);
  //     const createdTask = { id: generatedId, text: taskText };

  //     props.onAddTask(createdTask);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  return (
    <Section>
      <TaskForm onEnterTask={taskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
