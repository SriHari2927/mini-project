import React from 'react'
import './HistoryPage.css'
import { Link } from 'react-router-dom'
const HistoryPage = () => {
  return (
    <div className='bigdiv'>
        
        <div className='second'>
      <div className='image'>
<img 
src='https://images.theconversation.com/files/49135/original/22qc7r28-1400667334.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip'
 height={300}
 alt='' />
 
      </div>
  <hr />    
<div className='smalldiv'>
    <div className='toosmall'>
<Link to='/english'><div className='div11 text-white'>ENGLISH</div></Link>
<Link to='/tamil'><div className='div2 text-white'>TAMIL</div></Link>
<Link to='/maths'><div className='div3 text-white'>MATHS</div></Link>
<Link to='/science'><div className='div4 text-white'>SCIENCE</div></Link>
<Link to='/social'><div className='div6 text-white'>SOCIAL</div></Link>
</div>
      </div>
      </div>
      </div>
    
  )
}

export default HistoryPage
