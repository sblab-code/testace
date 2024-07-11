import React, { createContext, useState } from 'react';

// Context
export const IELTSContext = createContext();

export const IELTSProvider = ({ children }) => {
  const [task1Answer, setTask1Answer] = useState('');
  const [task2Answer, setTask2Answer] = useState('');

  return (
    <IELTSContext.Provider value={{ task1Answer, setTask1Answer, task2Answer, setTask2Answer }}>
      {children}
    </IELTSContext.Provider>
  );
};
