
const AddHotel = () => {

    return (
        <form class="row g-3">
            <div class="col-md-3">
                <label for="inputEmail4" class="form-label">Hotel Name</label>
                <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-3">
                <label for="inputPassword4" class="form-label">Description</label>
                <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-3">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-3">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-3">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="col-md-3">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" />
            </div>

            <div class="col-md-1">
                <label for="inputState" class="form-label">Hotel Type</label>
                <select id="inputState" class="form-select">
                    <option selected>Hotels</option>
                    <option selected>Hostel</option>
                    <option>Vacation</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Contact No</label>
                <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-6">
                <label for="formFile" class="form-label">Images Uploads</label>
                <input class="form-control" type="file" id="formFile" />
            </div>



            <h2>Service Available</h2>

            <div class="col-md-3">
                <label for="inputEmail4" class="form-label">Amenities</label>
                <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-3">
                <label for="inputState" class="form-label">Room Type</label>
                <select id="inputState" class="form-select">
                    <option selected>Single Room</option>
                    <option>Family</option>
                    <option>Hall Room</option>
                    <option>Double Room</option>
                    <option>Friend Room</option>

                </select>
            </div>
            <div class="col-md-3">
                <label for="inputPassword4" class="form-label">Basic</label>
                <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-3">
                <label for="inputEmail4" class="form-label">Health Safety</label>
                <input type="email" class="form-control" id="inputEmail4" />
            </div>
            
            <div className="col-md-6"> 
            <lable>Fun Things :-  </lable>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">Restaurant</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">Dance Bar</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">Game activity</label>
                </div>
            </div>

            <div className="col-md-6"> Parking :-  
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">Available</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">Dance Bar</label>
                </div>
            </div>

            <div class="col-md-3">
                <label for="inputState" class="form-label">Food Type</label>
                <select id="inputState" class="form-select">
                    <option selected>Snack</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Drink</option>

                </select>
            </div>

            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>


        </form>
    )
}

export default AddHotel;