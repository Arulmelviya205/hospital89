import React from 'react'
import "./Login.css";
import hos from './assets/hos.jpg';
import pital from './assets/pital.jpg';
import user from './assets/user.jpg';
import face from './assets/face.jpg';
import insta from './assets/insta.jpg';
import goo from './assets/goo.jpg';
export default function Login(){
  return (
    <div>
       <img className='ho1' src={hos}/>
      <h1 className='ta1'>Hospital</h1>
      <div className='cc'></div>
      <h1 className='log'>Login</h1>
      <img className='pital' src={pital}/>
      <img className='user' src={user}/>
      <label className='user0'>Username</label>
      <input type='text' className='user1'/>
       <img className='face' src={face}/>
       <img className='insta' src={insta}/>
       <img className='goo' src={goo}/> 
  

    </div>
  )
}
