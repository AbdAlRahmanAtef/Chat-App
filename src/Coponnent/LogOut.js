import React from 'react'
import { auth } from './../firebase';

function LogOut() {
  const signOut = () => {
    signOut(auth)
  }
  return (
    <button onClick={() => {auth.signOut()}} className='logout'>Logout</button>
  )
}

export default LogOut
