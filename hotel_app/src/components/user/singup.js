import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [user, setUser]=useState('')
    const navigate = useNavigate()

    let name, value;
    const inputHandle = (e) => {
        name = e.target.name
        value = e.target.value
        console.log("user", user)
        setUser({ ...user, [name]: value })  //[] dynamic data for
    }


    const postSingup = async (e) => {
        e.preventDefault();
        const { name,email, mobile, password } = user;
        console.log(name,email, mobile, password, "kkkk")

        const regInf={
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               name, email, mobile, password
            })
        }
        
        const  res= await fetch('/signup', regInf);
        const result= await res.json()
        console.log("result", result)

        if (res.status === 400 || !res) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else {
            window.alert("Registration is successfully!")
            console.log("Registration is successfully")
            navigate('/')
        }
    }


    return (
        <>
            {/* add modal here... */}
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-target="#staticBackdrop" className="btn btn-outline-success" type="submit">Signup</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="user-name" className="col-form-label" >Name:</label>
                                    <input type="text" className="form-control" onChange={inputHandle} name="name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label" onChange={inputHandle}>Email:</label>
                                    <input type="email" className="form-control" onChange={inputHandle} name="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="mobile" className="col-form-label">mobile NO.:</label>
                                    <input type="number" className="form-control" onChange={inputHandle} name="mobile" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="col-form-label">Password:</label>
                                    <input type="password" className="form-control" onChange={inputHandle} name="password" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={postSingup}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
