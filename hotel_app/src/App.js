import './App.css';
import react, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import ServiceAdd from './components/hotel/addservice'
import AddHotel from './components/hotel/addhotel'
import HotelDetails from './components/hotel/hoteldetails'

const Routing=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />  
        {/* <Route path="/home" element={<DatePickers/>} /> */}
        <Route path="/addhotel" element={<AddHotel/>} />
        <Route path="/addservice" element={<ServiceAdd/>} />
        <Route path="/hoteldetails" element={<HotelDetails/>} />

        
      </Routes>
    </>
  )
}

const App=()=> {
  const [login, setLogin]= useState("")

  useEffect(()=>{
    let userInf= localStorage.getItem('user')
    userInf= JSON.parse(userInf)
    setLogin(userInf)
}, [])  


  return (
    <>
    <div className="App">
      <Navbar login={login}/>
      <center><h1>Hotel Quality</h1></center>
      <Routing/>
      {/* <Home/> */}
    </div>
    </>
  );
}

export default App;
