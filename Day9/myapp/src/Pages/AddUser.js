import React, { useState } from 'react'
import { addUser } from '../services/api'
import {useNavigate} from 'react-router-dom'
const AddUser = () => {
  const handleHome=()=>
  {
    navigate('/')
  }
  const navigate=useNavigate()
  const [data,setData]=useState({
    username:'',
    password:''
  })
 const handleChange=(e)=>{
 setData({...data,[e.target.id]:e.target.value})
 }
 const handleSubmit = async(e) => {
  e.preventDefault();
  try{
    const res= await addUser(data)
if(res.status==201){
  alert("User added Successfully!✅")
}
  }
  catch(e){
    console.log(e);
  }
 }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' id='username' placeholder='username' onChange={handleChange}/>
            <input type='password' id='password' placeholder='password' onChange={handleChange}/>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
        
        <button onClick={handleHome} className='edit-btn'>Home🏡</button>
    </div>
  )
}
export default AddUser