import { useState, useContext, useEffect } from "react";
import React from "react";
import { IELTSContext } from "../../../../context/ielts";


// Simple styled components
const Button = ({ children, ...props }) => (
    <button
        style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        }}
        {...props}
    >
        {children}
    </button>
);

const Textarea = ({ ...props }) => (
    <textarea
        style={{
            width: '100%',
            height: '200px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        }}
        {...props}
    />
);

// IELTS Writing Module Component
const IELTSWritingModule = () => {
    const { task1Answer, setTask1Answer, task2Answer, setTask2Answer } = useContext(IELTSContext);
    const [currentTask, setCurrentTask] = useState(1);
    const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = () => {
        // TODO: Implement API call to submit answers
        console.log('Submitting answers:', { task1Answer, task2Answer });
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    const wordCount = (text) => {
        return text.trim().split(/\s+/).filter(Boolean).length;
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>IELTS Writing Module</h1>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{formatTime(timeLeft)}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                        type="checkbox"
                        checked={currentTask === 2}
                        onChange={() => setCurrentTask(currentTask === 1 ? 2 : 1)}
                        style={{ marginRight: '10px' }}
                    />
                    Switch to Task {currentTask === 1 ? '2' : '1'}
                </label>
            </div>

            <Textarea
                placeholder={`Write your answer for Task ${currentTask} here...`}
                value={currentTask === 1 ? task1Answer : task2Answer}
                onChange={(e) => currentTask === 1 ? setTask1Answer(e.target.value) : setTask2Answer(e.target.value)}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <span>Word count: {wordCount(currentTask === 1 ? task1Answer : task2Answer)}</span>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
};

export default IELTSWritingModule;