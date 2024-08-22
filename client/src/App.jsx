import React from 'react';
import Login from './Login/Login'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';

import AddPage from './Add/AddPage';
import Signup from './Signup/Signup';
import LoginPage from './LoginPage/LoginPage';
import UpdatePage from './Update/UpdatePage';
import ViewPage from './View/ViewPage';
import GetPage from './Create/GetPage';
import HistoryPage from './historyPage/HistoryPage';
import EnglishPage from './English/EnglishPage';
import TamilPage from './Tamil/TamilPage';
import MathsPage from './Maths/MathsPage';
import SciencePage from './Science/SciencePage';
import SocialPage from './Social/SocialPage';
import EnglishTopics from './EnglishTopics/EnglishTopics';
import Hints from './Hints/Hints';
import TamilTopics from './TamilTopics/TamilTopics';
import Thirukural from './Thirukural/Thirukural';
import MathsTopic from './MathsTopic/MathsTopic';
import MathsExample from './MathsExample/MathsExample';
import MathsBranches from './MathsBranches/MathsBranches';
import ScienceTopics from './ScienceTopics/ScienceTopics';
import SocialTopics from './SocialTopics/SocialTopics';
import PhysicsTopic from './Physics/PhysicsTopic';
import BiologyTopics from './Biology/BiologyTopics';
import History from './History/History';
import Geography from './Geography/Geography';
import Test from './Test';



const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element= {<Login />}> </Route>
  <Route path='/blog' element = {<Navbar />}/>
  <Route path='/add' element = {<AddPage />}/>
  <Route path='/update/:id' element = {<UpdatePage />} />
  <Route path='/view/:id' element = {<ViewPage />} />
  <Route path='/create' element = {<GetPage />} />
  <Route path='/signup' element = {<Signup />}/>
  <Route path='/login' element= {<LoginPage />}/>
  <Route path = '/history' element = {<HistoryPage />}/>
  <Route path='/english' element = {<EnglishPage />} />
  <Route path='/tamil' element={<TamilPage />} />
  <Route path='/maths' element = {<MathsPage />} />
  <Route path = '/science' element={<SciencePage />}/>
  <Route path = '/social' element = {<SocialPage />}/>
  <Route path='/eng' element = {<EnglishTopics />}/>
  <Route path='/eg' element = {<Hints />}/>
  <Route path='/tamiltopics' element = {<TamilTopics />}/>
  <Route path = '/kural' element = {<Thirukural />}/>
  <Route path='/mathstopic' element = {<MathsTopic />}/>
  <Route path = '/mathsexample' element={<MathsExample />}/>
  <Route path='/mathsbranches' element = {<MathsBranches />}/>
  <Route path='/sciencetopic' element ={<ScienceTopics />} />
  <Route path ='/socialtopics' element = {<SocialTopics />}/>
  <Route path = '/physicstopic' element={<PhysicsTopic />}/>
  <Route path='/biology' element = {<BiologyTopics />}/>
  <Route path='/historypage' element={<History />}/>
  <Route path='/geography' element={<Geography />}/>
  <Route path='/test' element={<Test />}/>
  
</Routes>
</BrowserRouter>
  )
}

export default App