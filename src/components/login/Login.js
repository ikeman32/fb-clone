import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';

function Login() {

    const signIn = () =>{
        //sign in...
        auth.signInWithPopup(provider)
            .then(res =>{
                console.log(res)
            }).catch(error => alert(error.message))
    };
    return (
        <div className='login'>
            <div className="login_logo">
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"} alt=""/>
                <img src={"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"} alt=""/>
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
