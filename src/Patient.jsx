import React from 'react'
import './Patient.css';
import hos from './assets/hos.jpg';
import one from './assets/one.jpg';
import patho from './assets/patho.jpg';
import varma from './assets/varma.jpg';
import ana from './assets/ana.jpg';
import nano from './assets/nano.jpg';
import uro from './assets/uro.jpg';
import cardio from './assets/cardio.jpg';
import radio from './assets/radio.jpg';
import gyna from './assets/gyna.jpg';
import nep from './assets/nep.jpg';
import onco from './assets/onco.jpg';
import ctvs from './assets/ctvs.jpg';
import sree from './assets/sree.jpg';
export default function Patient() {
  return (
    <div>
      <img className='ho11' src={hos}/>
      <h1 className='ta11'>Hospital</h1>
      <img className='pat' src={one}/>
      <h1 className='doctor'>Doctor List</h1>
      <img className="patho" src={patho}/>
      <h1 className='raja'>Dr. Rajavigneshwari N</h1>
      <h4 className='raja1'>Specialist:Pathologist</h4>
      <img className='varma' src={varma}/>
      <h1 className='varma0'>Dr. (Prof.) Amitaabh Varma</h1>
      <h4 className='varma1'>Specialist:Neurology</h4>
      <img className='ana' src={ana}/>
      <h1 className='ana0'>Dr. Anita Kulkarni</h1>
      <h4 className='ana1'>Specialist:Anaesthesiology</h4>
      <img className='nano' src={nano}/>
      <h1 className='nano0'>Dr. Rashi Gupta</h1>
      <h4 className='nano1'>Specialist:Neonatology</h4>
      <img className='uro' src={uro}/>
      <h1 className='uro0'>Dr. Surendra Kumar Nindra</h1>
      <h4 className='uro1'>Specialist:Urology</h4>
      <img className='cardio' src={cardio}/>
      <h1 className='cardio0'>Dr. Deepak Natarajan</h1>
      <h4 className='cardio1'>Specialist:cardiology</h4>
      <img className='radio' src={radio}/>
      <h1 className='radio0'>Dr. Ravi Kumar Saman</h1>
      <h4 className='radio1'>Specialist:Radiologist</h4>
      <img className='gyna' src={gyna}/>
      <h1 className='gyna0'>Dr. Manisha Uddey</h1>
      <h4 className='gyna1'>Specialist:Gynaecology</h4>
      <img className='nep1' src={nep}/>
      <h1 className='nep0'>Dr. Shivangini Gupta</h1>
      <h4 className='nep2'>Specialist:Pediatric Nephrology</h4>
      <img className='onco' src={onco}/>
      <h1 className='oncoo'>Dr. P. Karunakar Reddy</h1>
      <h4 className='onco1'>Specialist:Surgical Oncologist</h4>
      <img className='ctvs' src={ctvs}/>
      <h1 className='ctvs0'>Dr. Ankush Singh Kotwal</h1>
      <h4 className='ctvs1'>Specialist:CTVS Surgeon</h4>
      <img className='sree' src={sree}/>
      <h1 className='sree0'>Dr. K. Siva Sree</h1>
      <h4 className='sree1'>Specialist:Medical Oncologist</h4>
      <div className='mm'></div>
      <h1 className='details'>Patient Details</h1>
    </div>
  )
}
