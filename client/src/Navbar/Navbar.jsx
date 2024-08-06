import React from "react";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.css'

import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
const navigate = useNavigate();


const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};

  
  return (
    <div>
    <div className="nav">
      <div>
        <h2>BLOG APP</h2>
      </div>
      <div className="nav2">
        <ul> 
          <li>HOME</li>
         <li><Link to= '/add'>CREATE</Link></li> 
         <li><Link to= '/create'>PAGES</Link></li>
       </ul>
      </div>
      <div>
      <button className="nav3" onClick={handleLogout}>LOGOUT</button>
      </div>
  </div>
  <div className=" num1 card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcB_nJUFy7tbJid6lqRSwpKQKyZQTQJa_Mag&s" className="card-img-top" alt="..." height={200}/>
  <div className="card-body">
    <p>SUBJECT NAME</p>
    <p className="card-title">TOPICS</p>
    <p className="card-text">Here We Can Add Some Information about the Subjects .</p>
   <Link to='/add'><div className="btn btn-primary">CREATE</div></Link> 
  </div>
</div>

</div>
  );
};

export default Navbar;
