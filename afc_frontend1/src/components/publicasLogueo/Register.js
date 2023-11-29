import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions'

import {useNavigate} from 'react-router';
import Loader from '../comunes/Loader';
import Messages from '../comunes/Messages';
import NavbarAF from '../comunes/NavbarAF'
import '../../App.css'




export default function Register(){

    const [user_name, setUser_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');


  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister);
  const {error, loading, userInfo} = userRegister;

  const navigate = useNavigate();
  const path = '/';

  useEffect(()=> {
    if (userInfo) {
      navigate(path);
    }
  }, [userInfo])


  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword){
      setMessage('Passwords must match!')
    } else {
      dispatch(register(user_name, email, password))
    }
  }

return (
    <>

{message && <Messages>{message}</Messages>}
        {error && <Messages>{error}</Messages>}
        {loading ? 
        <Loader/> :
        <>
        <NavbarAF/>
        <div className='register-container'>
        <h3>Pagina de resgistro</h3>
        <form onSubmit={submitHandler}  action="#" method="POST">
            <div >
                <label htmlFor="email-address" className="sr-only"> Username </label>
                <input
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="email"
                  required
                  className=""
                  placeholder="Username"
                />
            </div>

            <div className=''>
                <label htmlFor="email-address"> Email address </label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=""
                  placeholder="Email address"
                />
              </div>

              <div >
                <label htmlFor="password" className="sr-only"> Password
                </label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=""
                  placeholder="Password"
                />

                <div >
                <label htmlFor="password" > Confirm Password </label>
                <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=""
                  placeholder="Password"
                />
                </div>
              </div>


              <div>
              <button type="submit" className="" >
                <span className="">
                </span>
                Registrarte
              </button>
            </div>


        </form>
        </div>
        </>
        }
 

    </>
)
}

