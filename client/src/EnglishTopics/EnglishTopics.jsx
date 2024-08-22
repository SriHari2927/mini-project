import React from 'react'
import './EnglishTopics.css'
import { Link } from "react-router-dom";
const EnglishTopics = () => {
  return (
    <div>
        <div className='div1'>
    <div className='poems'>
      <div className='poems0'>POEMS</div>
      <br />
      
      <div className='poems1'>
      Poetry is written, spoken or sung language that is used in stronger or more original ways than prose is used. Poetry uses the meanings of words as prose does; but it also uses the sounds of words as if they were music, especially rhymes, other repeating sounds.Any particular instance of poetry is called a poem and is written by a poet. Poets use a variety of techniques called poetic devices, such as assonance, alliteration, euphony and cacophony, onomatopoeia, rhythm , and sound symbolism, to produce musical or incantatory effects.
      </div>
    </div>
    <div className='poems'>
      <div className='poems0'>PARAGRAPHS</div>
      <br />
      
      <div className='poems1'>
      What does paragraph mean?<br /><br />
The word paragraph comes from the Latin word paragraphos, which is roughly translated to mean a short stroke marking a break. A paragraph is a group of sentences that share a common topic or idea.A narrative paragraph which tells a story of a certain event. A descriptive paragraph which gives details about a person, place thing or idea. An expository paragraph which explains something, gives directions or shows how something happens and a persuasive paragraph which is opinionated and tries to sway the reader.      </div>
    </div>
    <div className='poems'>
      <div className='poems0'>HINTS-DEVELOPING</div>
      <br />
      
      <div className='poems1 '>
      The development of words and phrases into full sentences and thereby making coherent paragraphs is called the process of hints development. The development of words and phrases into full sentences and thereby making coherent paragraphs is called the process of hints development. There are some basic rules to be followed while developing hints: Read all the hints thoroughly. Try to understand the tone of the passage.</div><br />
     <Link to='/eg' className='jklm'>EXAMPLE</Link> 
    </div>
    </div>
 
    </div>
    
  )
}

export default EnglishTopics
