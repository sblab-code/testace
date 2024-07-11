import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {


    const location = useLocation();
    const { signupData } = location.state || {};
    const fieldsRef = useRef()
    const [OTP, setOTP] = useState({ code1: "", code2: "", code3: "", code4: "", code5: "", code6: "" })
    
    // Switch to input fields method
    const inputFocus = (e) => {
        const elements = fieldsRef.current.children
        const dataIndex = +e.target.getAttribute("data-index")
        if ((e.key === "Delete" || e.key === "Backspace")) {
            const next = dataIndex - 1;
            if (next > -1) {
                elements[next].focus()
            }
        } else {

            const next = dataIndex + 1
            if (next < elements.length && e.target.value != " " && e.target.value != "" && e.key.length == 1) {
                elements[next].focus()
            }
        }
    }

    const handleChange = (e, codeNumber) => {
        const value = e.target.value
        setOTP({ ...OTP, [codeNumber]: value.slice(value.length - 1) })
    }

    
    const otp = `${OTP.code1}${OTP.code2}${OTP.code3}${OTP.code4}${OTP.code5}${OTP.code6}`;
    
    console.log(otp);
    

    console.log("SignupData:", signupData); // Log to verify data

    // const handleChange = (e) => {
    //     setOTP(e.target.value);
    // };

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
                window.location.href = "/login";
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
            <label className="text-gray-600">
                Verification code
            </label>
            <div ref={fieldsRef} className="mt-2 flex items-center gap-x-2">
                <input type="text" data-index="0" placeholder="0" value={OTP.code1} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code1")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="1" placeholder="0" value={OTP.code2} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code2")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="2" placeholder="0" value={OTP.code3} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code3")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="3" placeholder="0" value={OTP.code4} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code4")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="4" placeholder="0" value={OTP.code5} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code5")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="5" placeholder="0" value={OTP.code6} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code6")}
                    onKeyUp={inputFocus}
                />
            </div>
            <button onClick={handleVerify}>Verify</button>
        </div>
    )
};

export default VerifyEmail;
