import './Assests/css/style.css'
import Nav from './components/nav'
function App(){
   return(
    <div>
        <Nav/>
        <h3 className='loginn'>LOGIN PAGE</h3>
    <form className="container shadow">
        <input type="text" id="user" placeholder="User Name"required className="auth-input"/>
        <input type="email" id="mail" placeholder="Enter your email id" required className="auth-input"/>
        <input type="password" id="pwd" placeholder="Enter your new password" required className="auth-input"/>
        <input type="password" id="pwd1" placeholder="Confirm password" required className="auth-input" />
        <input type="submit" value="LOGIN" className="auth-btn"/>
</form>
    </div>
   )
}
export default App