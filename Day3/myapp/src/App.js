import Nav from "./Components/Nav";
import './assets/css/Nav.css';
import Footer  from "./Components/Footer";
import Home from './Components/Home';
import './assets/css/Home.css';
import './assets/css/Footer.css';
function App(){
  return(
    <body>
    <div>
      
    <p className='main'>
    Welcome to your own World🌍
    </p>
    <Home/>
      <Nav/>
    </div>
    <Footer/>
    </body>
  )
}
export default App