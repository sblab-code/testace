// src/components/Writing.js

import React from "react";
import Task1 from "../components/ui/core/Writing/Task1";
import Task2 from "../components/ui/core/Writing/Task2";
import { useWritingContext } from "../context/WritingContext";

const WritingContent = () => {
    const { selectedTask, setSelectedTask } = useWritingContext();

    const handleToggle = (task) => {
        setSelectedTask(task);
    };

    const handleSubmit = () => {

    }

    return (
        <div className="writing-page">
            <div className="toggle-button">
                <label>
                    Task 1
                    <input
                        type="radio"
                        value="task1"
                        checked={selectedTask === "task1"}
                        onChange={() => handleToggle("task1")}
                    />
                </label>
                <label>
                    Task 2
                    <input
                        type="radio"
                        value="task2"
                        checked={selectedTask === "task2"}
                        onChange={() => handleToggle("task2")}
                    />
                </label>
            </div>
            {selectedTask === "task1" ? <Task1 /> : <Task2 />}
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

const Writing = () => {
    return <WritingContent />;
};

export default Writing;
