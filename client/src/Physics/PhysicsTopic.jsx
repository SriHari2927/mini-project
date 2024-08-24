import React from 'react'
import './PhysicsTopic.css'
const PhysicsTopic = () => {
  return (
    <div className='phys'>
      <div className='principles'>
      <h2>Basic Principles</h2>
      <li>Newton's laws of motion.</li>
      <li>Mass, force and weight (mass versus weight)</li>
      <li>Momentum and conservation of energy.</li>
      <li>Gravity, theories of gravity.</li>
      <li>Energy, work, and their relationship.</li>
      <br />
      
        <p><strong>Newton's laws of motion</strong> are three physical laws that describe the relationship between the motion of an object and the forces acting on it.</p>
        <div className='newtonlaw'>
        <div className='firstlaw'>
        <h2 className='bg-secondary text-black'>First law</h2>
         <p>Every object perseveres in its state of rest, or of uniform motion in a right line, except insofar as it is compelled to change that state by forces impressed thereon.</p>
        </div>
        <div className='secondlaw '>
        <h2 className='bg-secondary text-black'>Second Law</h2>
        <p>The change of motion of an object is proportional to the force impressed; and is made in the direction of the straight line in which the force is impressed.</p>

        </div>
        <div className='thirdlaw '>
        <h2 className='bg-secondary text-black'>Third Law</h2>
        <p>To every action, there is always opposed an equal reaction; or, the mutual actions of two bodies upon each other are always equal, and directed to contrary parts.</p>
        </div>
      </div>
      <br />
      <p>In physics, <strong>Mass</strong>, <strong>Weight</strong>, and <strong>Force</strong> are related concepts that describe how objects interact with each other and with gravity:</p>

      <div className='newtonlaw'>
        <div className='firstlaw'>
          <h2 className = 'bg-secondary text-black'>Mass</h2>
          <p>The amount of matter in an object, which is measured in kilograms (kg). Mass is a measure of an object's inertia, or how much it resists changes in velocity.</p>
        </div>
        <div className='seconddlaw'>
          <h2 className = 'bg-secondary text-black'>Weight</h2>
          <p>Weight is a measure of the force of gravity acting on an object. According to Newton's laws of motion, force is directly proportional to both mass and acceleration, and the equation for force is F = m * a, where m = mass and a = acceleration. </p>
        </div>
        <div className='thirdlaw'>
          <h2 className = 'bg-secondary text-black'>Force</h2>
          <p>Force is any influence that can change the position, speed, or state of an object. It can also be defined as a push or pull that acts on an object. Force can stop a moving object, move an object from rest, or change the direction of its motion. 
          </p>
        </div>
      </div>
     
      </div>
    </div>
  )
}

export default PhysicsTopic
