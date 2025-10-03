import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';
import hos from './assets/hos.jpg';
import caro from './assets/caro.jpg';
import brain from './assets/brain.jpg';
import ortho from './assets/ortho.jpg';
import pedia from './assets/pedia.jpg';
import der from './assets/der.jpg';
import kid from './assets/kid.jpg';
export default function About() {
  return (
    <div>
     <img className='ho' src={hos}/>
      <h1 className='ta'>Hospital</h1>
      <p className='doc1'>The administration and coordination of hospital operations to ensure efficient<br/>
       healthcare delivery and patient care.</p>
        <div className='gg'></div>
       <Link className="doc2" to="/Home.jsx">Learn more</Link>
          <h1 className='dap'>Department</h1>
            <div className='gg1'></div>
            <h4 className='kk0'>(heart and blood vessels)</h4>
            <h1 className='dio'>cardiology</h1>
       <img className='caro' src={caro}/>
       <p className='the'>Cardiology is the branch of medicine that<br/>
        deals with the study,
        diagnosis, and<br/>
         treatment of heart and blood vessel diseases.</p>
         <div className='gg2'></div>
         <h1 className='neu'>Neurologist</h1>
         <h4 className='kk1'>(brain, spinal cord, nerves)</h4>
         <img className='brain' src={brain}/>
         <p className='med'>A neurologist is a medical<br/>
          specialist who diagnoses and treats <br/>
         disorders of the brain, spinal cord, and nervous system.</p>
         <div className='gg3'></div>
         <h1 className='pedics'>orthopedics</h1>
         <h4 className='kk2'>(bones, joints, muscles)</h4>
         <img className='ortho' src={ortho}/>
         <p className='dis'>Orthopedics is the branch of medicine that focuses on the diagnosis, <br/>
         treatment, and prevention of disorders of the bones, joints, <br/>
         muscles, ligaments, <br/>
         and tendons.
         It helps manage conditions such as fractures,<br/>
         arthritis, back pain,<br/>
         and sports injuries.</p>
         <div className='gg4'></div>
         <h1 className='cian'>pediatrician</h1>
         <h4 className='kk3'>(children’s health)</h4>
         <img className='pedia' src={pedia}/>
         <p className='who'>A pediatrician is a medical doctor who specializes in the<br/> health and medical<br/>
          care of infants, children, and adolescents.<br/>
          They monitor growth, development,
 and provide preventive<br/> care like vaccinations.</p>
 <div className='gg5'></div>
 <h1 className='der'>Dermatology</h1>
 <h4 className='kk4'>(skin, hair, nails)</h4>
 <img className='der1' src={der}/>
 <p className='mat'>Dermatology is the branch of medicine that focuses on diagnosing<br/>
  and treating conditions related to the skin, hair, and nails.<br/>
It covers a wide range of issues, including acne, eczema,<br/>
 psoriasis, infections, and skin cancers.</p>
 <div className='gg6'></div>
 <h1 className='nep'>Nephrology</h1>
 <h4 className='kk5'>(kidneys)</h4>
 <img className='kid' src={kid}/>
 <p className='kid1'>Nephrology is the medical specialty concerned with the<br/>
  diagnosis and treatment<br/>
  of kidney-related diseases.
It deals with conditions <br/>
such as chronic kidney disease,<br/>
 kidney stones, high blood pressure, and electrolyte imbalances.</p>

      </div>
  )
}
