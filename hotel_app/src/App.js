import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import DatePickers from './components/home';
import AddHotel from './components/hotel/addhotel'

// const Routing=()=>{
//   return(
//     <>
//     <Routes>
//         <Route path="/" element={<Home/>} />  
//         <Route path="/admin" element={<DatePickers/>} />
//         <Route path="/home" element={"<ImageStory/>"} />
//         <Route path="/user" element={"<TextStory/>"} />
//         <Route path="/hotel" element={"<ViewStory/>"} />
//       </Routes>
//     </>
//   )
// }

const App=()=> {
  return (
    <>
    
    <div className="App">
      <Navbar/>
      <center><h1>Hotel Quality</h1></center>
      <AddHotel/>
      {/* <DatePickers/> */}
    </div>
    </>
  );
}

export default App;
