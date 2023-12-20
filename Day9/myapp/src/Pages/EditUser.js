import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { editUser } from '../services/api'
import { getUserId } from '../services/api'
import { useEffect } from 'react'
const EditUser = () => {
  const handleHome=()=>
{
  navigate('/')
}
  const {id}=useParams()
  const navigate=useNavigate()
  const [data,setData]=useState({
    username:'',
    password:''
  })
  const fetchUser=async()=>{
    try{
      const res=await getUserId(id)
      setData(res.data)
    }
    catch(e){
      console.log(e)
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res2= await editUser(id,data)
  if(res2.status==200){
    alert("User value updated Successfully!✅")
  }
    }
    catch(e){
      console.log(e);
    }
  }
    const handleChange=(e)=>{
      setData({...data,[e.target.id]:e.target.value})
    }
    useEffect(()=>{
     fetchUser()
    },[])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={data.username} id='username' placeholder='username' onChange={handleChange}/>
            <input type='password' value={data.password} id='password' placeholder='password' onChange={handleChange}/>
            <button type='submit' className='submit-btn'>Update</button>
        </form>
        
        <button onClick={handleHome} className='edit-btn'>Home🏡</button>
    </div>
  )
}
export default EditUser