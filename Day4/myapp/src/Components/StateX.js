import React from 'react'
import { useState } from 'react'
import '../assets/Css/StateX.css'
// const StateX=()=>{
//     const[data, setData]=useState(0);
//     const inc=()=>{
//         setData(data+1);
//     }
//     const dec=()=>{
//         setData(data-1);
//     }
//     return(
//         <>
//         <button onClick={inc}>
//             Increase
//         </button>
//         <p>{data}</p>
//         <button onClick={dec}>
//             Decrease
//         </button>
//         </>
//     )
// }
const StateX=()=>{
const [visible,setVisible]=useState(true);
const toggle=()=>{
    setVisible(!visible)
}
// setTimeout(()=>{
//     setVisible(true)
// },5000)
return(
    <>
    {
      visible?(
        <div className='home'>

            <div className='Card-wrapper'>
                <div className='Card'>
                    <p className='cookieHead'>Please turn on you History</p>
                    <p className='cookiedesc'>Cozz Recommendation will slight better!!</p>
                    <div className='buttoncont'>
                        <button className='accept' onClick={toggle}>Allow</button>
                        <button className='decline' onClick={toggle}>Decline</button>
                    </div>
                </div>
            </div>
        </div>
        ):(
            <div className='btn'>
            <button  className='new' onClick={toggle}>
                <h2>Welcome</h2>
            </button>
            </div>
            
        )
}
    </>
)
}
export default StateX