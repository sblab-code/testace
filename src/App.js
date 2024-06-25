import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';


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

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
