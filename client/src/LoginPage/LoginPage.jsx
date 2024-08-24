import React, { useState } from 'react'
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../config';

const LoginPage = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();


const handleSubmit = (e) => {
  e.preventDefault()
  axios.post(`${SERVER_URL}/login`, {email,password})
  .then(result => {
    console.log(result)
    if(result.data=== 'Success'){
      navigate('/blog')
    }else{
      alert('No Users Found')
    }
    
  })
  .catch(err => console.log(err))
}


  return (
    <div>
        <div className='abcdef justify-content-center align-items-center'>
        <h2>LOGIN</h2>
       <form onSubmit={handleSubmit}>
        
        <div className='mnopq'>
           
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
         
         <div className='mnopq'>
           
           <label htmlFor='name'>
            <strong>PASSWORD :</strong>
           </label>
           <input type='password' 
           placeholder='Enter your password'
           className='input1'
           onChange={(e) => setPassword(e.target.value)}
           />
         </div>  
         <button className=' abcdefg btn btn-success'>LOGIN</button>
       </form>
       </div>
    </div>
  )
}

export default LoginPage