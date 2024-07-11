import React from "react";
import './answerbox.css';
import { useWritingContext } from "../../../../context/WritingContext";

const Task2 = () => {
    const { task2Data, setTask2Data } = useWritingContext();

    const handleChange = (e) => {
        setTask2Data(e.target.value);
    };

    const wordCount = task2Data.trim().split(/\s+/).length;

    return (
        <div className="answer-box">
            <div className="answer-text-div">
                <textarea
                    className="answer-text"
                    value={task2Data}
                    onChange={handleChange}
                />
            </div>
            <div className="word-count-div">
                <span className="word-count-span">Word Count: {wordCount}</span>
            </div>
        </div>
    );
};

export default Task2;