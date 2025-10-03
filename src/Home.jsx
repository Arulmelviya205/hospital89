import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import hos from './assets/hos.jpg';
import hos1 from './assets/hos1.jpg';
import about from './assets/about.jpg';
export default function Home() {
  return (
    <div>
      <img className='hos' src={hos}/>
      <h1 className='tal'>Hospital</h1>
     <img className='hos1' src={hos1}/>
     <p className='care'>Hospital management involves planning, organizing, and supervising healthcare services <br/>
     to ensure efficient patient care and smooth hospital operations. It focuses on optimizing<br/>
      resources, staff, and processes to improve healthcare quality and patient satisfaction.</p>
      <h1 className='aa'>About</h1>
      <img className='abo' src={about}/>
      <p className='co'>The administration and coordination of hospital operations to ensure efficient<br/>
       healthcare delivery and patient care.</p>
      <div className='coo'></div>
         <Link className="coo1" to="/About.jsx">Learn more</Link>
       
    </div>
  )
}
