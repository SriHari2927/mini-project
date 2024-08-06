import React from 'react';
import Login from './Login/Login'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';

import AddPage from './Add/AddPage';
import Signup from './Signup/Signup';
import LoginPage from './LoginPage/LoginPage';
import CreatePage from './Create/CreatePage';
import UpdatePage from './Update/UpdatePage';
import ViewPage from './View/ViewPage';



const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element= {<Login />}> </Route>
  <Route path='/blog' element = {<Navbar />}/>
  <Route path='/add' element = {<AddPage />}/>
  <Route path='/update/:id' element = {<UpdatePage />} />
  <Route path='/view/:id' element = {<ViewPage />} />
  <Route path='/create' element = {<CreatePage />} />
  <Route path='/signup' element = {<Signup />}/>
  <Route path='/login' element= {<LoginPage />}/>
</Routes>
</BrowserRouter>
  )
}

export default App