const express = require('express')
const bodyParser=require('body-parser');
const app = express()
const cors= require('cors')
const cookieParser= require('cookie-parser')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname)); 
app.use(cors());
app.use(cookieParser());

let routes=require('./routes/index')
app.use('/', routes);

var port =5001;
app.listen(port, ()=>{
    console.log(`server is listening this ${port}`);
});