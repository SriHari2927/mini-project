import React, { useEffect, useState } from "react";
import "./CreatePage.css";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { SERVER_URL } from "../config";

const GetPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/getAll`)
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5001/delete/${id}`)
      .then(result => {
        console.log(result, 'Deleted Successfully')
        location.reload();
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="full"  >
      <Link to="/add">
        <div className="create btn btn-success"> Add +</div>
      </Link>
      <Link to = '/history'>
      <div className="header">
        {users.map((user) => (
          <div key={user._id} className="test ">
            <div className="head">
             <div className="fifth">
                {user.lessonname && (
                <div className="fourth">{user.lessonname}</div>
              )}
              </div>
             
              <br />
              <div className="first">{user.subject}</div><br />
              <div className="text-white">({user.topic})</div><br />
              <div className="third">{user.description}</div>
             
            </div>
            <hr />
            <div className="footer">
              <Link to={`/view/${user._id}`}><IoEye /></Link>
              <Link to={`/update/${user._id}`}><MdEdit /></Link>
              <Link onClick={() => handleDelete(user._id)}> <MdDelete /></Link>
            </div>
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
};

export default GetPage;
