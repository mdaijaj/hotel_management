import React, { useState, usEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [user, setUser]=useState('')
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    let name, value;
    const inputHandle = (e) => {
        name = e.target.name
        value = e.target.value
        console.log("user", user)
        setUser({ ...user, [name]: value })  //[] dynamic data for
    }

    const postLogin = async (e) => {
        e.preventDefault();
        const { email,password } = user;
        console.log(email, password, "kkkk")
        handleClose();

        const regInf={
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               email, password
            })
        }
        const res= await fetch('/login', regInf);
        const result= await res.json()
        console.log("result", result)


        if (res.status === 400 || !res) {
            window.alert("Invalid login");
            console.log("Invalid Registration")
        }
        else {
            window.alert("login is successfully!")
            console.log("login is successfully")
            localStorage.setItem('user', JSON.stringify(result.user_detail))
            // setShow(JSON.stringify(result.user_detail))
            navigate('/')
        }
    }

    usEffect=(()=>{
        postLogin()
    }, [])


    return (
        <>
            {/* add modal here... */}
            <button data-bs-toggle="modal" data-bs-target="#exampleModal2" data-target="#staticBackdrop" className="btn btn-outline-success">Login</button>

            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">User Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label2" onChange={inputHandle}>Email:</label>
                                    <input type="email" className="form-control2" onChange={inputHandle} name="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="col-form-label2">Password:</label>
                                    <input type="password" className="form-control2" onChange={inputHandle} name="password" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={postLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
