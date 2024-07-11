import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import Login from './pages/Login';
import { useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Pricing from './pages/Pricing';
import Navbar from './components/common/Navbar';
import IELTSWritingTest from './pages/IELTSWritingTest';
import Contact from './pages/Contact';
import Speaking from './pages/Speaking';
import Writing from './pages/IELTSWritingTest';


// import ModuleTest from './components/core/IELTS/ModuleTest';



function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  // useEffect(() => {
  //   const fetchedToken = localStorage.getItem('clerk-db-jwt')
  //   if (fetchedToken) {
  //     setisLoggedIn(true);
  //     setToken(fetchedToken);
  //   }
  // });

  // useEffect(async () => {
  //   if (localStorage.getItem("token")) {
  //     const token = JSON.parse(localStorage.getItem("token"));



  //     // await fetch("getuserdetails", {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json"
  //     //   },
  //     //   body: JSON.stringify({
  //     //     token
  //     //   })
  //     // });
  //   }
  // }, [])



  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("https://testace-server.onrender.com/", {
      method: "GET",
    })

    if (response.ok) {
      alert("API is working")
    } else {
      console.log("error");
    }

  }

  return (
    <div className="App">
      <Navbar token={token} />
      <button onClick={handleClick}>Click Me</button>
      {/* <button><Link to={"/signup"} >Sign up</Link></button> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/writing' element={<IELTSWritingTest />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='speaking' element={<Speaking />} />
        <Route path='/writing1' element={<Writing />} />
        {/* <Route path="/practice-ielts/module-test/:module" component={ModuleTest} /> */}

      </Routes>

    </div>
  );
}

export default App;
