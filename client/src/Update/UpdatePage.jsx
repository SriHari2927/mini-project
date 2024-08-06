import React, { useEffect, useState } from 'react'
import './UpdatePage.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePage = () => {
   
const {id} = useParams();
const[subject,setSubject] = useState('');
const[topic,setTopic] = useState('');
const[description,setDescription] = useState('');
const navigate = useNavigate();

useEffect(() => {
  axios.get(`http://localhost:5001/getuser/${id}` )
  .then(result => {
    console.log(result)
    setSubject(result.data.subject)
    setTopic(result.data.topic)
    setDescription(result.data.description)
  })
  .catch(err => console.log(err))

},[id])


const update = (e) => {
  e.preventDefault();
  axios.put(`http://localhost:5001/update/${id}`, {subject, topic, description})
  .then(result => {
    console.log(result,'hjbhjxbsj')
    navigate('/create')
  })
  .catch(err => console.log(err))
}


  return (
    <div className=" d-flex  justify-content-center align-items-center">
      <div className=" ins w-50">
        <form onSubmit={update}> 
          <h1 className="h1">Updating Subjects</h1>
          
          <div className="mb-2">
            <label htmlFor="heading">
              <strong>SUBJECT :</strong>
            </label>
            <input
              type="text"
              id="heading"
              className="form-heading"
              value = {subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="heading">
              <strong>TOPIC :</strong>
            </label>
            <input
              type="text"
              id="heading"
              
              className="form-heading1"
              value = {topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="heading">
              <strong>ABOUT :</strong>
            </label>
            <input
              type="text"
              id="heading"
              
              className="form-heading2"
              value = {description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="numb btn btn-success">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePage