import React, { useState, useEffect } from 'react';

const ListeningTest = ({ onComplete, updateAnswers }) => {
  const [currentRecording, setCurrentRecording] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes in seconds
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock data - replace with actual test data
  const testData = [
    { audioSrc: "path_to_audio_1.mp3", questions: [{id: 1, text: "Question 1"}, {id: 2, text: "Question 2"}] },
    { audioSrc: "path_to_audio_2.mp3", questions: [{id: 3, text: "Question 3"}, {id: 4, text: "Question 4"}] },
    { audioSrc: "path_to_audio_3.mp3", questions: [{id: 5, text: "Question 5"}, {id: 6, text: "Question 6"}] },
    { audioSrc: "path_to_audio_4.mp3", questions: [{id: 7, text: "Question 7"}, {id: 8, text: "Question 8"}] },
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

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Here you would typically control the audio playback
  };

  const handleTestComplete = () => {
    updateAnswers(answers);
    onComplete();
  };

  return (
    <div>
      <h2>Listening Test</h2>
      <div>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</div>
      <div>
        <audio src={testData[currentRecording].audioSrc} controls={isPlaying} />
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        {testData[currentRecording].questions.map(question => (
          <div key={question.id}>
            <p>{question.text}</p>
            <input 
              type="text" 
              value={answers[question.id] || ''} 
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            />
          </div>
        ))}
      </div>
      {currentRecording < testData.length - 1 ? (
        <button onClick={() => setCurrentRecording(currentRecording + 1)}>Next Recording</button>
      ) : (
        <button onClick={handleTestComplete}>Finish Listening Test</button>
      )}
    </div>
  );
};

export default ListeningTest;