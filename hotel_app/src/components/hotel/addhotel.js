import React, {useState} from "react";
import axios from 'axios'

const AddHotel = () => {
    const [hoteldata, setHoteldata] = useState({
        hotel_name: "",
        description: "",
        email: "",
        password: "",
        address: "",
        contactNo: "",
        rent: "",
        hoteltype: "",
        role: "",
    });
    
    let name, value;
    const handleInputs= async(event)=>{
        name= event.target.name
        value= event.target.value
        console.log("value", value)
        setHoteldata({...hoteldata, [name]: value})  //[] dynamic data for
    }


    const addhotelInf= async(e)=>{
        e.preventDefault();
        const {hotel_name, description, email, password, address, contactNo, rent, hoteltype,role}= hoteldata ;
        const hotelInf= {hotel_name, description,email, password, address, contactNo, rent, hoteltype, role}
        console.log("hoteldata", hotelInf)
        // const requestOptions = {
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(
        //         hotel_name,
        //         description,
        //         email,
        //         password,
        //         address,
        //         contactNo,
        //         rent,
        //         hoteltype,
        //         role
        //     )
        // };
        const res= await axios.post('/addhotel', {hotelInf})
        console.log("res", res)
        if(res.status===400 || !res){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else{
            window.alert("add hotel successfully!")
            console.log("add hotel is successfully")
            // history.push('/home')
        }
    }

    return (
        <form method="Post" className="row g-3">
            <div className="col-md-3">
                <label for="hotel_name" className="form-label">Hotel Name</label>
                <input type="text" className="form-control" name="hotel_name"  onChange= {handleInputs} id="hotel_name" />
            </div>
            <div className="col-md-3">
                <label for="description" className="form-label">Description</label>
                <input type="text" className="form-control" name="description" onChange= {handleInputs} id="description" />
            </div>
            <div className="col-md-3">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" onChange= {handleInputs} id="inputEmail4" />
            </div>
            <div className="col-md-3">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" name="inputPassword4" onChange= {handleInputs} id="inputPassword4" />
            </div>
            <div className="col-3">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" onChange= {handleInputs} name="address" id="address" placeholder="1234 Main St" />
            </div>
            <div className="col-md-3">
                <label for="state" className="form-label">State</label>
                <select id="state" name="state" className="form-select" onChange={handleInputs}>
                    <option selected>Choose...</option>
                    <option>Delhi</option>
                    <option>Maharast</option>
                    <option>karnataka</option>
                    <option>Rajasthan</option>
                    <option>Hariyana</option>
                    <option>Punjab</option>

                </select>
            </div>
            <div className="col-md-3">
                <label for="city" className="form-label">City</label>
                <input type="text" className="form-control" name="city" onChange= {handleInputs} id="city" />
            </div>

            <div className="col-md-1">
                <label for="inputState" className="form-label">Hotel Type</label>
                <select id="inputState" className="form-select" onChange= {handleInputs} name="inputState">
                    <option selected>Hotels</option>
                    <option selected>Hostel</option>
                    <option>Vacation</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="contactNo" className="form-label">Contact No</label>
                <input type="number" className="form-control" name="contactNo" onChange= {handleInputs} id="contactNo" />
            </div>
            <div className="col-6">
                <label for="formFile" className="form-label">Images Uploads</label>
                <input className="form-control" type="file"  name="formFile" onChange= {handleInputs} id="formFile" />
            </div>



            <h2>Service Available</h2>

            <div className="col-md-3">
                <label for="inputEmail4" className="form-label">Amenities</label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-3">
                <label for="inputState" className="form-label">Room Type</label>
                <select id="inputState" className="form-select">
                    <option selected>Single Room</option>
                    <option>Family</option>
                    <option>Hall Room</option>
                    <option>Double Room</option>
                    <option>Friend Room</option>

                </select>
            </div>
            <div className="col-md-3">
                <label for="password" className="form-label">Basic</label>
                <input type="password" className="form-control" onChange={handleInputs} id="password" />
            </div>
            <div className="col-md-3">
                <label for="inputEmail4" className="form-label">Health Safety</label>
                <input type="text" className="form-control" onChange={handleInputs} id="inputEmail4" />
            </div>
            
            <div classNameName="col-md-6"> 
            <lable>Fun Things :-  </lable>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" for="inlineCheckbox1">Restaurant</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" for="inlineCheckbox2">Dance Bar</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" for="inlineCheckbox2">Game activity</label>
                </div>
            </div>

            <div classNameName="col-md-6"> Parking :-  
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" for="inlineCheckbox1">Available</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" for="inlineCheckbox2">Dance Bar</label>
                </div>
            </div>

            <div className="col-md-3">
                <label for="inputState" className="form-label">Food Type</label>
                <select id="inputState" className="form-select">
                    <option selected>Snack</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Drink</option>
                </select>
            </div>

            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <div className="col-12">
                <input type="submit" className="form-submit" name="addhotel" id="addhotel" onClick={addhotelInf}/>
            </div>


        </form>
    )
}

export default AddHotel;