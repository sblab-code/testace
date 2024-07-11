import React, { useState, useEffect } from 'react';

const WritingTest = ({ onComplete, updateAnswers }) => {
  const [currentTask, setCurrentTask] = useState(1);
  const [answers, setAnswers] = useState({ task1: '', task2: '' });
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTestComplete();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerChange = (task, answer) => {
    setAnswers(prev => {
      const newAnswers = { ...prev, [task]: answer };
      updateAnswers(newAnswers);
      return newAnswers;
    });
  };

  const getWordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const handleTestComplete = () => {
    updateAnswers(answers);
    onComplete();
  };

  return (
    <div>
      <h2>Writing Test</h2>
      <div>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</div>
      <div>
        <button onClick={() => setCurrentTask(1)}>Task 1</button>
        <button onClick={() => setCurrentTask(2)}>Task 2</button>
      </div>
      {currentTask === 1 && (
        <div>
          <h3>Task 1</h3>
          <p>Describe the graph/chart/process...</p>
          <textarea 
            value={answers.task1} 
            onChange={(e) => handleAnswerChange('task1', e.target.value)}
            rows={10}
            cols={50}
          />
          <p>Word Count: {getWordCount(answers.task1)}</p>
        </div>
      )}
      {currentTask === 2 && (
        <div>
          <h3>Task 2</h3>
          <p>Write an essay on the following topic...</p>
          <textarea 
            value={answers.task2} 
            onChange={(e) => handleAnswerChange('task2', e.target.value)}
            rows={10}
            cols={50}
          />
          <p>Word Count: {getWordCount(answers.task2)}</p>
        </div>
      )}
      <button onClick={handleTestComplete}>Finish Writing Test</button>
    </div>
  );
};

export default WritingTest;