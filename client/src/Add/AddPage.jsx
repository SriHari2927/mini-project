import React, { useState } from "react";
import './AddPage.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../config";

const AddPage = () => {

const [subject,setSubject] = useState('');
const [topic,setTopic] = useState('');
const [description,setDescription] = useState('')
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
axios.post(`${SERVER_URL}/add`, {subject,topic,description})
.then(result => {
  console.log(result);
  navigate('/create')
})
.catch(err => console.log(err))
}

return (
    <div className="full">
    <div className=" d-flex  justify-content-center align-items-center">
      <div className=" ins w-50">
        <form onSubmit={handleSubmit}>
          <h1 className="h1">ADDING SUBJECTS</h1>
          
          <div className="mb-2">
            <label htmlFor="heading">
              <strong>SUBJECT :</strong>
            </label>
            <input
              type="text"
              id="heading"
              placeholder="Enter Subject Name"
              className="form-heading"
              value ={subject}
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
              placeholder="Enter Topic"
              className="form-heading1"
              value={topic}
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
              placeholder="Write here"
              className="form-heading2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="numb btn btn-success">SUBMIT</button>
        </form>
      </div>
    </div>
    </div>

  );
};

export default AddPage;
