import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import PracticeIELTS from "../components/core/IELTS/PracticeIELTS";

const Dashboard = () => {


    useEffect(() => {
        if (!localStorage.getItem("clerk-db-jwt")) {
            window.location.href = "/login";
        }
    }, []);


    return (
        <div>
            Welcome back, How are you?
            Welcome to the dashboard

            <PracticeIELTS />

        </div>
    );
};

export default Dashboard;