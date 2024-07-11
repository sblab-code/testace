import React, { useEffect, useState } from "react";

export const Timer = ({ initialTime, onComplete, CompleteComponent }) => {

    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {

        const [hours, minutes, seconds] = initialTime.split(':').map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        setTimeLeft(totalSeconds);

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(intervalId);
                    onComplete();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [initialTime, onComplete]);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="text-center">
            {timeLeft > 0 ? (
                <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
            ) : (
                <CompleteComponent />
            )}
        </div>
    );

};




const TimerApp = () => {
    const [isComplete, setIsComplete] = useState(false);
  
    const handleComplete = () => {
      setIsComplete(true);
      window.location.href = "/signup";
    };
  
    const CompleteComponent = () => (
      <div className="text-2xl font-bold text-green-500">Countdown Complete!</div>
    );
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
        <Timer
          initialTime="00:00:10"
          onComplete={handleComplete}
          CompleteComponent={CompleteComponent}
        />
        {isComplete && <p className="mt-4">Timer has finished!</p>}
      </div>
    );
  };
  
  export default TimerApp;