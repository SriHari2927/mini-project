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
  const [lessonname, setLessonName] = useState('');
  const [showExtra, setShowExtra] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/getuser/${id}`)
      .then((result) => {
        console.log(result.data);
        setData(result.data);
        setLessonName(result.data.lessonname); 
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleAddClick = () => {
    setShowExtra(!showExtra);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5001/update/${id}`, { lessonname })
      .then(result => {
        console.log(result);
        setData(prevData => ({ ...prevData, lessonname })); // update data object
        navigate('/create');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="viewpage">
      <button className="btn btn-success" onClick={handleAddClick}>
        ADD +
      </button>
      <form onSubmit={handleSubmit}>
        {showExtra && (
          <div className="extradiv">
            <h3>Adding Topics</h3>
            <label className="labelname" htmlFor="text">
              <input
                className="inputfield"
                type="text"
                placeholder="Enter your lesson"
                value={lessonname}
                onChange={(e) => setLessonName(e.target.value)}
              />
            </label>
            <br />
            <br />
            <button className="btn btn-secondary w-50">SUBMIT</button>
          </div>
        )}
      </form>
      <div className="bike">
        <label className="label" htmlFor="text">
          SUBJECT NAME: <span>{data.subject}</span>
        </label>
        <br />
        <label className="label" htmlFor="text">
          TOPIC: <span>{data.topic}</span>
        </label>
        <br />
        <label className="label" htmlFor="text">
          DESCRIPTION: <span>{data.description}</span>
        </label>
        <br />
        <label className="label" htmlFor="text">
          LESSON NAME: <span>{data.lessonname}</span>
        </label>
      </div>
    </div>
  );
};

export default ViewPage;
