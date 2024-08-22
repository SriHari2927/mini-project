import React from 'react'
import './SocialPage.css'
import { Link } from 'react-router-dom'
const SocialPage = () => {
  return (
    <div className='social'>
       <div className='science0'>
       <div className=" science1 secondary ">
  <div className="one bg-secondary">ABOUT</div>
   <div className="two">
    <h5 className="three text-white">SOCIAL</h5>
    <p className="four"> Social Science is a strict systematic discipline that builds and organises knowledge in the form of testable hypotheses and predictions about the world.Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence.</p>
  </div>
</div>
<div className=" science2 bg-default ">
  <Link to='/socialtopics'>
  <div className=" one bg-secondary text-white">TOPICS</div>
   <div className="two">
    <h3>HISTORY</h3>
    <h3>GEOGRAPHY</h3>
    <h3>ECONOMICS</h3>
  </div>
  </Link>
  
</div>
    </div>
    </div>
  )
}

export default SocialPage
