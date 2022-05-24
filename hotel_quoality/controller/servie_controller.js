const Service= require('../model/service_schema')

//add product
const addService= async (req, res)=>{
    try{
        const serviceData= await Service.create(req.body)
        return res.status(200).send({
            message:"add service success!", 
            data: serviceData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}


const allServices= async (req, res)=>{
    try{
        const serviceData= await Service.find()
        return res.status(200).send({
            message:"user resitered save data", 
            data: serviceData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}


const serviceDetails= async (req, res)=>{
    try{
        console.log(req.params._id)
        const serviceData= await Service.findById({
            _id: req.params.id
        })
        if (!serviceData || serviceData==undefined){ 
            return  res.send("not found userDtails")
        }
        return res.status(200).send({
            message:"user resitered save data", 
            data: serviceData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}

    
//update service information
const updateService= async(req,res)=>{
    try{
        const {roomType,description,rate,images,hotelType}=req.body
        console.log("req.body", req.body)
        const updateData= await Service.findByIdAndUpdate({_id: req.params.id}, {
            $set:{
                roomType,description,rate,images,hotelType
            }
        })
        console.log("updateData", updateData)
        res.send({status: "update data successfully! ", "result": updateData})
    }
    catch(err){
        console.log(err.message)
    }
}


const deleteService= async (req, res)=>{
    try{    
        const deleteInf=await Service.findByIdAndRemove({_id: req.params.id});
        console.log("delete successfully!", deleteInf)
        return res.send({message: "delete successfully!", status: "success"})
    }catch(err){
        console.log(err.message)
    }
}


module.exports= {
    addService,
    allServices,
    serviceDetails,
    updateService,
    deleteService
}