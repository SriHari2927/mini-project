import React from 'react'
import './Login.css'

import { Link } from 'react-router-dom'

const Login = () => {
    return (
      <div className='pqrs'>
        <img src='https://i.dailymail.co.uk/1s/2021/08/09/14/46465521-9876549-image-a-9_1628514744565.jpg' />
        <div className="loginpage">
          <div className="login">
           <Link to = '/signup'><button>LOGIN</button></Link> 
          </div>
        </div>
        </div>
      )

}

export default Login