import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
    const location = useLocation();
    const { signupData } = location.state || {};
    const [otp, setOtp] = useState("");

    console.log("SignupData:", signupData); // Log to verify data

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleVerify = async (e) => {
        e.preventDefault();

        const data = {
            otp,
            ...signupData,
        };

        console.log("Data to send:", data);

        try {
            const response = await fetch("https://testace-server.onrender.com/api/v1/auth/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Email Verified successfully & sign up is successful");
            } else {
                console.error("Verification Failed: ", await response.json());
                alert("Verification failed. please try again");
            }
        } catch (error) {
            console.error("Verification error: ", error);
            alert("An error occurred during verification. Please try again.");
        }
    };

    return (
        <div>
            <input type="text" value={otp} onChange={handleChange} placeholder="Enter OTP" />
            <button onClick={handleVerify}>Verify OTP</button>
        </div>
    );
};

export default VerifyEmail;
