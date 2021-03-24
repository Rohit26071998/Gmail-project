import React from 'react'
import { auth, provider } from './Firebase'
import Logo from "./Images/logo.png"
import "./Styles/login.css"
import { useStateValue, StateContext } from '../Context/StateProvider';

function Login() {
    const [state, dispatch] = useStateValue(StateContext)
    const loginwithgmail = ()=>{
        auth.signInWithPopup(provider).then(result=>{
            console.log(result.user);
            dispatch({
                type:'SET_USER',
                user:result.user
            });
        });
    }
    return (
        <div className="loginwrapper">
            <div className="loginpage">
                <img src={Logo} alt="logo"/>
                <button className="gmail_login" onClick={loginwithgmail}>Login in with Gmail</button>
            </div>
        </div>
    )
}

export default Login
