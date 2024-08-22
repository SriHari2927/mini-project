import React from 'react'
import './TamilPage.css'
import { Link } from 'react-router-dom'
const TamilPage = () => {
  return (
    <div className='ttt'>
      <div className='tamil'>
        <h3 className=' bg-white text-black'> ABOUT</h3>
        <div className='paraa'>
          <h3>TAMIL</h3>
          <p className='parag'>Tamil was the first language declared as a classical language in India. The Government of India issued this notification on 6th June 2004. This day is celebrated as Semmozhi Day. This announcement was considered a great victory for Tamil scholars and activists at that time.Although Sanskrit was also considered a classical language in India earlier, Tamil was the first officially declared classical language.Now that Tamil has been declared as the classical language for 19 years, let's look at the antiquity of Tamil and its special features.</p>
        </div>
      </div>
      <div className='tamill'>
        <h3 className=' bg-white text-black'> TOPICS</h3>
        <Link to='/tamiltopics'>
          <div className='ttopics'>
            <p>அகநானூறு</p>
            <p>புறநானூறு</p>
            <p>திருக்குறள்</p>
            <p>கம்பராமாயணம்</p>
            <p>சிலப்பதிகாரம்</p>
          </div>
        </Link>


      </div>
    </div>
  )
}

export default TamilPage
