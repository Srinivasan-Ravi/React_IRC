// import Nav from "./Components/Nav";
// import './assets/css/Nav.css';
// import Footer  from "./Components/Footer";
// import Home from './Components/Home';
// import './assets/css/Home.css';
// function App(){
  //   return(
    //     <body>
//     <div>

//     <p className='main'>
//     Welcome to your own World🌍
//     </p>
//     <Home/>
//       <Nav/>
//     </div>
//     <Footer/>
//     </body>
//   )
// }
// export default App

// src/App.js
import React from 'react';
import Navbar from './Components/Nav'
import Home from './Components/Home';
import Footer from './Components/Footer'
import './assets/css/Footer.css';
import './assets/css/Nav.css';
import './assets/css/Home.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
};

export default App;
