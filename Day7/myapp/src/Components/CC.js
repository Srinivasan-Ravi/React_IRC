import React from 'react'
import { Component } from 'react'
import toast, { Toaster } from 'react-hot-toast';
//HOT TOAST
const notify = () => toast.success('Bread is being Toasted🥪',
{
    theme:"dark"
});
class CC extends Component{
    render(){
        return(
            <>
<div>
      <button onClick={notify}>A Toast please🍞!</button>
      <Toaster />
    </div>
            </>
        )
    }
}
export default CC
