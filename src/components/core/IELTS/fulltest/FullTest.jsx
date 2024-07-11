import React, { useState, useEffect } from 'react';
import ReadingTest from './ReadingTest';
import ListeningTest from './ListeningTest';
import WritingTest from './WritingTest';
import SpeakingTest from './SpeakingTest';

const FullTest = () => {
  const [currentModule, setCurrentModule] = useState('reading');
  const [answers, setAnswers] = useState({
    reading: {},
    listening: {},
    writing: { task1: '', task2: '' },
    speaking: {}
  });

  const moveToNextModule = () => {
    const modules = ['reading', 'listening', 'writing', 'speaking'];
    const currentIndex = modules.indexOf(currentModule);
    if (currentIndex < modules.length - 1) {
      setCurrentModule(modules[currentIndex + 1]);
    } else {
      // Test completed, handle submission
      handleTestSubmission();
    }
  };

  const handleTestSubmission = () => {
    // Here you would typically send the answers to your backend
    console.log('Test completed. Answers:', answers);
    // Redirect to results page or dashboard
  };

  const updateAnswers = (module, newAnswers) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [module]: newAnswers
    }));
  };

  return (
    <div>
      <h1>Full IELTS Test</h1>
      {currentModule === 'reading' && (
        <ReadingTest 
          onComplete={moveToNextModule} 
          updateAnswers={(newAnswers) => updateAnswers('reading', newAnswers)}
        />
      )}
      {currentModule === 'listening' && (
        <ListeningTest 
          onComplete={moveToNextModule}
          updateAnswers={(newAnswers) => updateAnswers('listening', newAnswers)}
        />
      )}
      {currentModule === 'writing' && (
        <WritingTest 
          onComplete={moveToNextModule}
          updateAnswers={(newAnswers) => updateAnswers('writing', newAnswers)}
        />
      )}
      {currentModule === 'speaking' && (
        <SpeakingTest 
          onComplete={moveToNextModule}
          updateAnswers={(newAnswers) => updateAnswers('speaking', newAnswers)}
        />
      )}
    </div>
  );
};

export default FullTest;