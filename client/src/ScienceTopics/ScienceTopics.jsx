import React from 'react'
import {Link} from 'react-router-dom'
const ScienceTopics = () => {
  return (
    <div className='maths0'>
      <div className='maths1'>
        <h2 className='bg-white'>PHYSICS</h2>
         <p className='mathspara'>Physics is the natural science of matter, involving the study of matter, its fundamental constituents, its motion and behavior through space and time.Physics is the branch of science that deals with the structure of matter and how the fundamental constituents of the universe interact. It studies objects ranging from the very small using quantum mechanics to the entire universe using general relativity.</p>
    <Link to ='/physicstopic' className='jklm'><p>TOPICS</p></Link>     
      </div>
      <div className='maths1'>
        <h2 className='bg-white'>CHEMISTRY</h2>
         <p className='mathspara'>Chemistry is a branch of natural science that deals principally with the properties of substances, the changes they undergo, and the natural laws that describe these changes.Chemistry is a subdiscipline of science that deals with the study of matter and the substances that constitute it. It also deals with the properties of these substances and the reactions undergone by them to form new substances.</p>
         
      </div>
      <div className='maths1'>
        <h2 className='bg-white'>BIOLOGY</h2>
         <p className='mathspara'>Biology is a natural science that studies living organisms and their processes. The word biology comes from the Greek words bios meaning "life" and logos meaning "study". Biology is a broad field that encompasses many different disciplines.Biology is a natural science discipline that studies living things. It is a very large and broad field due to the wide variety of life found on Earth, so individual biologists normally focus on specific fields. </p>
        <Link to='/biology' className='jklm'><p>TOPICS</p></Link> 
      </div>
      
    </div>
  )
}

export default ScienceTopics
