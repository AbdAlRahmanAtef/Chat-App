import React from 'react'
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Signin from './Signin';
import LogOut from './LogOut';
const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <nav>
      <div className='container'>
        <h1>Chat App</h1>
        {user ? <LogOut/>:<Signin/>}
      </div>
    </nav>
  )
}

export default Navbar;
