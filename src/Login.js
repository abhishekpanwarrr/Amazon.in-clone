import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'

export const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const history = useHistory()
    const signin = (e) =>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{

            history.push('/')
        }).catch(e=>alert(e.message))

    }
    const register = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(e=> alert(e.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='LoginImage' />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button onClick={signin} type='submit' className='login__singInButton'>Sign in</button>
                </form>
                <p>Accept all the conditons before login</p>
                <button onClick={register} className='login__registerButton'>Create your account!!</button>
            </div>
        </div>
    )
}
