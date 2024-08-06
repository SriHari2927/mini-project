import React, { useState } from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { FaArrowDownLong } from "react-icons/fa6";


const Signup = () => {

const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setpassword] = useState('');

const navigate = useNavigate();



const handleSubmit = (e) => {
  e.preventDefault();
  if(!name.trim() || !email.trim() || !password.trim() ){
     alert("All Fields are required")
    return;
  }
  setError('');
  axios.post("http://localhost:5001/register", {name,email,password})
  .then(alert('Account created'))
  .then(result => console.log(result))
  .catch(err => console.log(err))
  navigate('/login')
}


  return (
    <div>
        <div className='abcde justify-content-center align-items-center'>
        <h2>REGISTER</h2>
       <form onSubmit={handleSubmit}>
        <div className='mnop'>
           <label htmlFor='name'>
            <strong>NAME :</strong>
           </label>
           <input type='text' 
           placeholder='Enter your name'
           className='input'
           onChange={(e) => setName(e.target.value)}
           />
         </div> 
         <br />
         <div className='mnop'>
           
           <label htmlFor='name'>
            <strong>EMAIL :</strong>
           </label>
           <input type='email' 
           placeholder='Enter your email'
           className='input'
           onChange={(e) => setEmail(e.target.value)}
           />
         </div> 
         <br />
         <br /> 
         <div className='mnop'>
           
           <label htmlFor='name'>
            <strong>PASSWORD :</strong>
           </label>
           <input type='password' 
           placeholder='Enter your password'
           className='input1'
           onChange={(e) => setpassword(e.target.value)}
           />
         </div>  
         <button className='xyz btn btn-primary'>REGISTER</button>
         <p>Already Have an Account? <span>Login here</span>{<FaArrowDownLong />}</p>
         <Link to= '/login'><button className=' vxyz btn btn-success'>LOGIN</button></Link>
       </form>
       </div>
    </div>
  )
}

export default Signup