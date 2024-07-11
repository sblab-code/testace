import React, { useState, useEffect } from 'react';

const ReadingTest = ({ onComplete, updateAnswers }) => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [reviewFlags, setReviewFlags] = useState({});

  // Mock data - replace with actual test data
  const testData = [
    { paragraph: "Long paragraph 1...", questions: [{id: 1, text: "Question 1"}, {id: 2, text: "Question 2"}] },
    { paragraph: "Long paragraph 2...", questions: [{id: 3, text: "Question 3"}, {id: 4, text: "Question 4"}] },
    { paragraph: "Long paragraph 3...", questions: [{id: 5, text: "Question 5"}, {id: 6, text: "Question 6"}] },
  ];

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

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => {
      const newAnswers = { ...prev, [questionId]: answer };
      updateAnswers(newAnswers);
      return newAnswers;
    });
  };

  const toggleReviewFlag = (questionId) => {
    setReviewFlags(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleTestComplete = () => {
    updateAnswers(answers);
    onComplete();
  };

  return (
    <div>
      <h2>Reading Test</h2>
      <div>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</div>
      <div>
        <p>{testData[currentParagraph].paragraph}</p>
        {testData[currentParagraph].questions.map(question => (
          <div key={question.id}>
            <p>{question.text}</p>
            <input 
              type="text" 
              value={answers[question.id] || ''} 
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            />
            <button onClick={() => toggleReviewFlag(question.id)}>
              {reviewFlags[question.id] ? 'Unmark for Review' : 'Mark for Review'}
            </button>
          </div>
        ))}
      </div>
      {currentParagraph < testData.length - 1 ? (
        <button onClick={() => setCurrentParagraph(currentParagraph + 1)}>Next Paragraph</button>
      ) : (
        <button onClick={handleTestComplete}>Finish Reading Test</button>
      )}
    </div>
  );
};

export default ReadingTest;