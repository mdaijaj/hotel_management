import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"  //22
import Signup from './user/singup';
import Login from './user/login';
import Logout from './user/logout';

const Navbar = (props) => {
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oxf4YD_VmJlBDK11fJi8TQiurUdn_upGRg&usqp=CAU" style={{ borderRadius: "50%" }} width="80" height="60" className="d-inline-block align-top" alt="image path not found" />
                </NavLink>
                Quality Hotel
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addhotel">Add Hotel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addservice">Add Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Car Rental</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Admin</NavLink>
                        </li>
                       
                    </ul>
                </div>{
                    console.log("aijaj", props.login)
                }
                {props.login? 
                (
                <>
                <h6>{props.login.name}</h6> 
                    <Logout/>
                </>
                )
                :(
                <>
                    <Signup/>
                    <Login/>
                </>)
            }
                
            </div>
        </nav>
        </>
        
    )
}

export default Navbar;