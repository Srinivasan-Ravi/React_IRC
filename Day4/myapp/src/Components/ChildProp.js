import React from 'react'
const ChildProp=(props)=> {
  return (
    <>
    <h1>I'm {props.fname}</h1>
    <h1>I'm {props.lname}</h1>
    </>
  )
}

export default ChildProp