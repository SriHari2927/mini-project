import React from 'react'
import './MathsTopic.css'
import { Link } from 'react-router-dom'
const MathsTopic = () => {
  return (
    <div className='fulldiv'>
    <div className='maths0'>
      <div className='maths1'>
        <h2 className='bg-white'>ALGEBRA</h2>
         <p className='mathspara'>The language of algebra uses numbers and variables. It lets you describe patterns and relationships between quantities. A variable is a symbol that can be replaced by any one of a set of numbers or other objects.Algebra is a branch of mathematics that involves the study of mathematical symbols, rules, equations, expressions, and functions.</p>
   <Link to ='/mathsexample'> 
   <p className='examplee'>EXAMPLE</p>
   </Link>     
      </div>
      <div className='maths1'>
        <h2 className='bg-white'>PROBABILITY</h2>
         <p className='mathspara'>Probability means possibility. It is a branch of mathematics that deals with the occurrence of a random event. The value is expressed from zero to one. Probability is a branch of study that describes how likely events are to occur.<br />There are three basic rules associated with probability: the addition, multiplication, and complement rules. The addition rule is used to calculate the probability of event A or event B happening; we express it as: P(A or B) = P(A) + P(B) - P(A and B)</p>
    
      </div>
      <div className='maths1'>
        <h2 className='bg-white'>GEOMETRY</h2>
         <p className='mathspara'>Geometry is the branch of mathematics that deals with shapes, angles, dimensions and sizes of a variety of things we see in everyday life. Geometry is derived from Ancient Greek words – 'Geo' means 'Earth' and 'metron' means 'measurement'.The words and symbols of geometry are used to describe specific spatial ideas and relationships accurately and succinctly.</p>
   <Link to ='/mathsbranches'> 
   <p className='examplee'>BRANCHES</p>
   </Link>     
      </div>
      
    </div>
    </div>
  )
}

export default MathsTopic
