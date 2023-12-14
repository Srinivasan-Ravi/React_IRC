import Home from './pages/Home';
import Nav from './components/Nav';
import { Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
   <div className='App'>
    <Nav/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
</Routes>
    </div>
  );
}

export default App;
