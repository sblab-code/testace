import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Signup = () => {

    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
    });
    const [verifyemail, setverifyemail] = useState(false);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setSignupData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const { firstName, lastName, email, contactNumber, password, confirmPassword } = signupData;

    const handleClick = async (e) => {
        // alert(`${firstName} ${lastName} is registered`);

        e.preventDefault();

        try {
            const response = await fetch("https://testace-server.onrender.com/api/v1/auth/sendotp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupData),

            });


            if (response.ok) {
                setverifyemail(true);
                // setSignupData();
                alert("OTP sent successully");
                navigate("/verify-email", { state: { signupData } });
            } else {
                console.error("Signup Failed: ", response.data);
                alert("Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("signup error", error);
            alert("An error occured during signup, please try again.")
        }

    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", marginTop: 200 }} >
            <form>
                <div>
                    <label>
                        First Name
                    </label>
                    <input type="text"
                        name="firstName"
                        value={firstName}
                        required
                        onChange={handleOnChange} />
                </div>
                <div>
                    <label>
                        Last Name
                    </label>
                    <input type="text"
                        name="lastName"
                        value={lastName}
                        required
                        onChange={handleOnChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email"
                        name="email"
                        value={email}
                        required
                        onChange={handleOnChange} />
                </div>
                <div>
                    <label>Contact Number</label>
                    <input type="tel"
                        name="contactNumber"
                        value={contactNumber}
                        required
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        required
                        onChange={handleOnChange}
                    />
                </div>
                <button onClick={handleClick}>Sign up</button>
                {verifyemail && <Link to="/verify-email" state={signupData}>Verify Email</Link>}
            </form>
        </div>
    );
};

export default Signup;