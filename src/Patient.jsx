import React, { useState } from 'react'
import './Patient.css';
import axios from 'axios';
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
import man from './assets/man.jpg';
import nam from './assets/nam.jpg';
import gir from './assets/gir.jpg';
import gen from './assets/gen.jpg';
import boy from './assets/boy.jpg';
import ema from './assets/ema.jpg';
import num from './assets/num.jpg';
import pro from './assets/pro.jpg';
import add from './assets/add.jpg';
import gro from './assets/gro.jpg';
export default function Patient() {
  const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[gender,setGender]=useState('');
    const[dob,setDoB]=useState('');
    const[email,setEmail]=useState('');
    const[number,setNumber]=useState('');
    const[problem,setProblem]=useState('');
    const[address,setAddress]=useState('');
    const[blood,setBlood]=useState('');
    const[check,setCheck]=useState(false);
    const PostData=async() =>{
      try{
      await axios.post(`https://68c8ec4eceef5a150f62b5f6.mockapi.io/index1/`,{
        id:id,
        name:name,
        age:age,
        gender:gender,
        dob:dob,
        email:email,
        number:number,
        problem:problem,
        address:address,
        blood:blood,
        check:check
     });
     GetData();
      }
   catch(error){
       console.log("failed to create data:",error.message);
       alert("submitted successfully:");
    }
  }
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
      <img className='nn0' src={man}/>
      <img className='nam0' src={nam}/>
      <img className='age0' src={gir}/>
      <img className='gen0' src={gen}/>
      <img className='dob0' src={boy}/>
      <img className='ema0' src={ema}/>
      <img className='num0' src={num}/>
      <img className='pro0' src={pro}/>
      <img className='add0' src={add}/>
      <img className='gro0' src={gro}/>
       <label className='nn'>patient ID:</label><br/>
      <input type='text' onChange={event=>{setId(event.target.value)}} className='nn1'/><br/>
      <label className='nam'>Name:</label><br/>
       <input type='text' onChange={event=>{setName(event.target.value)}} className='nam1'/><br/>
      <label className='age'>Age:</label><br/>
       <input type='text' onChange={event=>{setAge(event.target.value)}} className='age1'/><br/>
       <label className='gen'>Gender:</label><br/>
        <input type='text' onChange={event=>{setGender(event.target.value)}} className='gen1'/><br/>
        <label className='dob'>DOB:</label><br/>
         <input type='text' onChange={event=>{setDoB(event.target.value)}} className='dob1'/><br/>
         <label className='ema'>email:</label><br/>
          <input type='text' onChange={event=>{setEmail(event.target.value)}} className='ema1'/><br/>
          <label className='num'>Number:</label><br/>
           <input type='text' onChange={event=>{setNumber(event.target.value)}} className='num1'/><br/>
           <label className='pro'>Problem:</label><br/>
            <input type='text' onChange={event=>{setProblem(event.target.value)}} className='pro1'/><br/>
            <label className='add'>Address:</label><br/>
             <input type='text' onChange={event=>{setAddress(event.target.value)}} className='add1'/><br/>
             <label className='gro'>Blood group:</label><br/>
             <input type='text' onChange={event=>{setBlood(event.target.value)}} className='gro1'/><br/>
             <input type='checkbox' onChange={(event)=>setCheck(event.target.checked)} className='chec'/>
             <button className='sub' onClick={PostData}>submit</button>
    </div>
  )
}
