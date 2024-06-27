import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import Login from './pages/Login';


function App() {

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
      <button onClick={handleClick}>Click Me</button>

      <button><Link to={"/signup"} >Sign up</Link></button>
      {/* <button><Link to={"/signup"} >Sign up</Link></button> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
      </Routes>

    </div>
  );
}

export default App;
