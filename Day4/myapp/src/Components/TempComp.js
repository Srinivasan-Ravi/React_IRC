import { useState } from "react"

const TempComp=()=>{
    const [visible,setVisible]=useState(false)


const [data, setData]=useState({
    username:'',
    password:''
})

const handleChange=(e)=>{
setData({...data,[e.target.id]:e.target.value })
console.log(data)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Final Data:")
    console.log(data)
}

const Login=()=>
{
    setVisible(!visible)
}


    return(
        <>
        <button onClick={Login}>login page</button>
        {visible ? (

        <form onSubmit={handleSubmit}>
            <input type="text" id="username" placeholder="UserName" onChange={handleChange}/>
            <input type="password" id="password" placeholder="Password"  onChange={handleChange}/>
            <input type="submit" value="Login"/>
        </form>
          
        ):(
            <div>not </div>
        )
        }
        </>
    )
}
export default TempComp