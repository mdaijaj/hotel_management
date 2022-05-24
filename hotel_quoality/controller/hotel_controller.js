const Hotels= require('../model/hotel_schema')

//add product
const addHotel= async (req, res)=>{
    try{
        const hotelData= await Hotels.create(req.body)
        return res.status(200).send({
            message:"admin hotel add succuess", 
            data: hotelData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}


const allHotels= async (req, res)=>{
    try{
        const hotelData= await Hotels.find()
        return res.status(200).send({
            message:"get all hotel list ", 
            data: hotelData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}


const hotelDetails= async (req, res)=>{
    try{
        console.log(req.params._id)
        const hotelData= await Hotels.findById({
            _id: req.params.id
        })
        if (!hotelData || hotelData==undefined){ 
            return  res.send("not found hotel")
        }
        return res.status(200).send({
            message:"user resitered save data", 
            data: hotelData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}

    
//update product information
const updateHotel= async(req,res)=>{
    try{
        const {hotel_name,description,price,images,hotelType}=req.body
        const updateData= await Hotels.findByIdAndUpdate({_id: req.params.id}, {
            $set:{
                hotel_name,description,price,images,hotelType
            }
        })
        console.log("updateData", updateData)
        res.send({status: "update data successfully! ", "result": updateData})
    }
    catch(err){
        console.log(err.message)
    }
}


const deleteHotel= async (req, res)=>{
    try{    
        const deleteInf=await Hotels.findByIdAndRemove({_id: req.params.id});
        console.log("delete successfully!", deleteInf)
        return res.send({message: "delete successfully!", status: "success"})
    }catch(err){
        console.log(err.message)
    }
}


module.exports= {
    addHotel,
    allHotels,
    hotelDetails,
    updateHotel,
    deleteHotel
}