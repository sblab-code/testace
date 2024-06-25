import React, { useState } from "react";


const Signup = () => {

    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
    })

    const handleOnChange = (e) => {
        setSignupData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const { firstName, lastName, email, contactNumber, password, confirmPassword } = signupData;

    const handleClick = (e) => {
        alert(`${firstName} ${lastName} is registered`);
    }

    return (
        <div>
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
            </form>
        </div>
    );
};

export default Signup;