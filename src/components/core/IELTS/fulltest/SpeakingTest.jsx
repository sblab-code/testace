import React, { useState, useEffect } from 'react';

const SpeakingTest = ({ onComplete, updateAnswers }) => {
  const [currentPart, setCurrentPart] = useState(1);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  // Mock data - replace with actual test data
  const testData = {
    part1: [
      "Tell me about your hometown.",
      "What do you like to do in your free time?",
      "Do you prefer reading books or watching movies? Why?"
    ],
    part2: {
      topic: "Describe a place you like to visit.",
      points: [
        "Where it is",
        "When you go there",
        "What you do there",
        "Why you like it"
      ]
    },
    part3: [
      "Do you think tourism is good for a country? Why or why not?",
      "How has travel changed in the last 50 years?",
      "What are some challenges that tourists face when visiting a new country?"
    ]
  };

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && currentPart === 2) {
      handlePartComplete();
    }
    return () => clearInterval(timer);
  }, [timeLeft, currentPart]);

  const startRecording = () => {
    setIsRecording(true);
    // Here you would typically start the speech recognition
    // For this example, we'll just simulate it with a timeout
    setTimeout(() => {
      setTranscript("This is a simulated transcript of the user's speech...");
      setIsRecording(false);
    }, 5000);
  };

  const handlePartComplete = () => {
    updateAnswers(prev => ({
      ...prev,
      [`part${currentPart}`]: transcript
    }));
    setTranscript('');
    if (currentPart < 3) {
      setCurrentPart(currentPart + 1);
      if (currentPart === 1) {
        setTimeLeft(60); // 1 minute preparation time for Part 2
      }
    } else {
      onComplete();
    }
  };

  return (
    <div>
      <h2>Speaking Test - Part {currentPart}</h2>
      {currentPart === 1 && (
        <div>
          <h3>Part 1: Introduction and Interview</h3>
          {testData.part1.map((question, index) => (
            <div key={index}>
              <p>{question}</p>
              <button onClick={startRecording} disabled={isRecording}>
                {isRecording ? 'Recording...' : 'Start Recording'}
              </button>
            </div>
          ))}
        </div>
      )}
      {currentPart === 2 && (
        <div>
          <h3>Part 2: Individual Long Turn</h3>
          <p>{testData.part2.topic}</p>
          <ul>
            {testData.part2.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {timeLeft > 0 ? (
            <p>Preparation Time: {timeLeft} seconds</p>
          ) : (
            <button onClick={startRecording} disabled={isRecording}>
              {isRecording ? 'Recording...' : 'Start Recording'}
            </button>
          )}
        </div>
      )}
      {currentPart === 3 && (
        <div>
          <h3>Part 3: Two-way Discussion</h3>
          {testData.part3.map((question, index) => (
            <div key={index}>
              <p>{question}</p>
              <button onClick={startRecording} disabled={isRecording}>
                {isRecording ? 'Recording...' : 'Start Recording'}
              </button>
            </div>
          ))}
        </div>
      )}
      <div>
        <h4>Transcript:</h4>
        <p>{transcript}</p>
      </div>
      <button onClick={handlePartComplete}>Next Part</button>
    </div>
  );
};

export default SpeakingTest;