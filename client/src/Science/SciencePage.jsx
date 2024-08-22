import React from 'react'
import './SciencePage.css'
import { Link } from 'react-router-dom'
import { ImArrowDownRight } from "react-icons/im";

const SciencePage = () => {
  return (
    <div className='science0'>
       <div className=" science1  ">
  <div className="one bg-secondary">ABOUT</div>
   <div className="two">
    <h5 className="three text-white">SCIENCE</h5>
    <p className="four">Science is a strict systematic discipline that builds and organises knowledge in the form of testable hypotheses and predictions about the world.Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence.</p>
  </div>
</div>
<div className='arrow'>{<ImArrowDownRight />}</div>
<div className=" science2 ">
  <Link to='/sciencetopic'>
  <div className=" one bg-secondary text-white">TOPICS</div>
   <div className="two">
    <h3>PHYSICS</h3>
    <h3>CHEMISTRY</h3>
    <h3>BIOLOGY</h3>
  </div>
  </Link>
  
</div>
    </div>
  )
}

export default SciencePage
