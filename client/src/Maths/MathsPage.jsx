import React from 'react'
import './Mathspage.css'
import { Link } from 'react-router-dom'
const MathsPage = () => {
  return (
    <div className='tam'>
      <div className='tamil11'>
        <h3 className=' bg-white text-black'> ABOUT</h3>
        <div className='paraa'>
          <h3>MATHS</h3>
          <p className='parag'>Math language is all about numbers, notations and symbols and has a language of its own. But, it's also linked with interesting words. Every mathematical number or symbol consists of a corresponding term or phrase. Thus, the process of word formation in mathematics is often quite unforeseeable.Mathematical English is a special form of the English language used for making formal mathematical statements, specifically to communicate definitions, theorems, proofs and examples.</p>
        </div>
      </div>
      <div className='tamil03'>
        <h3 className=' bg-white text-black'> TOPICS</h3>
       <Link to='/mathstopic'>
       <div className='topics33'>
          <h3>Algebra</h3>
          <h3>Probability</h3>
          <h3>Trigonometry</h3>
          <h3>Geometry</h3>
        </div></Link> 
      </div>
      
    </div>
  )
}

export default MathsPage
