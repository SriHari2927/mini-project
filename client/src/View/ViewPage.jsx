import React, { useEffect, useState } from "react";
import "./ViewPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ViewPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    subject: "",
    topic: "",
    description: "",
    lessonname: ""
  });
  const [showExtra, setShowExtra] = useState(false);
  const [newLessonName, setNewLessonName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/getuser/${id}`)
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleAddClick = () => {
    setShowExtra(!showExtra);
  };

  const handleInputChange = (e) => {
    setNewLessonName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      id: id, 
      lessonname: newLessonName };

    axios.post('http://localhost:5001/addOrUpdateSubject', updatedData)
      .then(result => {
        console.log("Data added:", result.data);
        setData(result.data);
        setShowExtra(false); 
        setNewLessonName(""); 
        navigate('/create');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="viewpage">
      <button className="btn btn-success" onClick={handleAddClick}>
        ADD +
      </button>
      
        
      {showExtra && (
        <form onSubmit={handleSubmit} className="extra">
          <h3 className=" h3"> LESSON NAME</h3>
          <input
            type="text"
            value={newLessonName}
            onChange={handleInputChange}
            placeholder="Enter lesson name"
            className="inp"
          />
          <br />
          <br />
          <button type="submit" className=" inpbtn btn btn-primary">
            Submit
          </button>
        </form>
)}
  
      <div className="bike">
      <label className="label" htmlFor="text">
          LESSON NAME: <span className="span3">{data.lessonname}</span>
        </label>
        <br />
        <label className="label" htmlFor="text">
          SUBJECT NAME: <span>{data.subject}</span>
        </label>
        <br />
        <label className="label" htmlFor="text">
          TOPIC: <span className="span1">{data.topic}</span>
        </label>
        <br />
        <label className="label" htmlFor="text">
          DESCRIPTION: <span className="span2">{data.description}</span>
        </label>
        <br />
        
      </div>
    </div>
  );
};

export default ViewPage;
