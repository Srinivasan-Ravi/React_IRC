import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//TOASTIFY
 const FC=()=>{
  const notify = () => toast.success("Here is your Notification!🔔",{
  theme:"dark",
}
  );
  const notify1= () => toast.warn("Beware of People!🛑☣️",
  {
    theme:"dark",
  });

    return (
      <div>
        <button onClick={notify}>Send me a Notification📜</button>
        <button onClick={notify1}>Say Hi to a Stranger✋</button>
        <ToastContainer />
      </div>
    );
}
export default FC