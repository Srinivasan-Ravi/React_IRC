import {Routes, Route} from 'react-router-dom'
import User from './Pages/User';
import AddUser from './Pages/AddUser'
import EditUser from './Pages/EditUser'
const App =()=> {
  return (
    <div>
      <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;