import React from 'react'
import './SocialTopics.css'
import { Link } from 'react-router-dom'
const SocialTopics = () => {
  return (
    <div className='soc'>
      <div className='maths0'>
      <div className='maths1'>
        <h2 className='qrst bg-white'>HISTORY</h2>
         <p className='mathspara'>History is the study of how human society has changed over time, including political, social, economic, scientific, technological, medical, cultural, intellectual, religious, and military developments. History is the study of past events. People know what happened in the past by looking at things from the past including sources (like books, newspapers, scripts and letters), buildings and different types of artifacts</p><br />
        <Link to='/historypage' className='jklm'><p>Learn More</p></Link> 
      </div>
      <div className='maths1'>
        <h2 className='qrst bg-white'>GEOGRAPHY</h2>
         <p className='mathspara'>Geography is the study of the Earth's surface, its environments, and the interactions between them.It also examines the relationships between people and their environments.Geography seeks to understand where things are found and why they are present in those places.Geography is the study of Earth's landscapes, peoples, places, and environments. Eratosthenes is considered the father of geography. Geography is usually broken down into two main categories.</p>
         <Link to='/geography' className='jklm'><p>Learn More</p></Link>     
      </div>
      <div className='maths1'>
        <h2 className='qrst bg-white'>ECONOMICS</h2>
         <p className='mathspara'>Economics is the study of scarcity and how it affects the use of resources, production of goods and services, and economic growth. It's a social science that's related to many other fields, including political science, geography, mathematics, sociology, psychology, engineering, law, medicine, and business.Economics is not just about money. It is about weighing different choices or alternatives. Some of those important choices involve money, but most do not.</p>
             
      </div>
      
    </div>
    </div>
  )
}

export default SocialTopics
