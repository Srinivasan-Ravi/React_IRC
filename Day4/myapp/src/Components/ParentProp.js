import React from 'react'
import ChildProp from './ChildProp'
function ParentProp() {
    const name1="Raj"
    const name2="Kumar"
  return (
    <>
<ChildProp fname={name1} lname={name2}/>
    </>
  )
}

export default ParentProp