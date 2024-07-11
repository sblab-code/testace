import React, { createContext, useContext, useState } from "react";

const WritingContext = createContext();

export const useWritingContext = () => useContext(WritingContext);

export const WritingProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState("task1"); // Default to Task 1
  const [task1Data, setTask1Data] = useState("");
  const [task2Data, setTask2Data] = useState("");

  return (
    <WritingContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
        task1Data,
        setTask1Data,
        task2Data,
        setTask2Data,
      }}
    >
      {children}
    </WritingContext.Provider>
  );
};
