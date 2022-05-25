import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// const SearchFilter=()=>{
//     alert("Hello! I am an alert box!!");
// }


const DatePickers = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <div className="main" style={{width: "90%", height: "200px", margin: "auto", borderRadius: "25px"}}>
                <form>
                    <div className="container">
                        <div class="row">
                            <div class="col-3">
                                <label /> Destination:
                                <input type="text" class="form-control" placeholder="Enter City...." />
                            </div>

                            <div class="col-2">
                                <label for="exampleFormControlSelect1">Hotel Type:</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>Room Type</option>
                                <option>Single Bedroom</option>
                                <option>Double Bedroom</option>
                                <option>Family Room</option>
                                <option>Hall Room</option>
                               
                                </select>
                            </div>

                            <div class="col-1">
                                <label for="exampleFormControlSelect1">Guest:</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>Guest</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                </select>
                            </div>

                            <div className="col-2">
                                <label>CheckIn</label>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                            
                            <div className="col-2">
                            <label>CheckOut</label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            
                            
                            <div className="col-2 pt-4">
                            <button type="submit" onClick={"SearchFilter()"}>Search</button>
                            </div>
                        </div>
                       
                        
                    </div>
                    
                </form>
            </div>

        </>
    );
};

export default DatePickers;