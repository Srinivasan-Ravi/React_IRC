//Normal Function
// function Nav(){}

//Arrow Function
//const Nav=()=>{}

// function Nav(){
//     return(
//         <>
//         <div className="navbar">🏠  |Signup|   Login|  AboutUs|  Contact☎️
//             </div>
//             </>
//     )
// }
// export default Nav

// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">

    <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
      <a href="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</a>
      <a href="/destinations" style={{ color: 'white', textDecoration: 'none' }}>Destinations</a>
    </nav>
    </div>
  );
};

export default Navbar;
