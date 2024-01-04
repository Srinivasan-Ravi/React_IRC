import React from "react";
import '../assets/App.css'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    const handleRegister=()=>
    {
      navigate('/Register')
    }
    const handleHome=()=>
    {
      navigate('/')
    }
    const handleLogin=()=>
    {
      navigate('/Login')
    }
  return (
    <div className="navbar">
      <div className="navtitle">📃 Form Validation</div>
      <ul className="navlinks">
        <button onClick={handleHome}>Home🏡</button>
        <button>Contact☎️</button>
        <button  onClick={handleLogin}>Login👤</button>
        <button onClick={handleRegister}>Register⌨️</button>
      </ul>
    </div>
  );
};

export default NavBar;



