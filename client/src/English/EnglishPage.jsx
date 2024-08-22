import React from 'react'
import './EnglishPage.css'
import { Link } from 'react-router-dom'
const EnglishPage = () => {
  return (
    <div className='total'>
      <div className=" zero ">
  <div className="one bg-secondary">ABOUT</div>
   <div className="two">
    <h5 className="three text-white">ENGLISH</h5>
    <p className="four">The most well-known language for social communication is English, a language that is spoken around the world. Modern English refers to the variety of the English language we use today. More than 150 accents are used in this language. This language is used in news, sports, programming, and international communication.</p>
  </div>
</div>
<Link to='/eng'><div className="zeroo bg-secondary">
  <h2 className="one bg-white text-black">TOPICS</h2>
  <div className="two">
    <h3>POEMS</h3>
    <h3>PARAGRAPHS</h3>
    <h3>HINTS-DEVELOPING</h3>
    <h3>PICTURE COMPREHENSION</h3>
  </div>
</div></Link>
{/* <div className="card text-white bg-success mb-3">
  <div className="card-header">POEM</div>
  <div className="card-body">
    <h5 className="card-title">Success card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
{/* <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Info card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
    </div>
  )
}

export default EnglishPage
