import React, { useState } from "react";


const Login = () => {


    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = userData;

    const handleOnChange = (e) => {
        setUserData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://testace-server.onrender.com/api/v1/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email, password),
            });

            console.log(userData);

            if (response.ok) {
                alert("Login successful");
                console.log("Login successful");
            } else {
                alert("Login failed");
                console.log("Login failed");
            }
        } catch (error) {
            console.log("Internal server error", error.message);
        }

    };

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>

    );
};


export default Login;