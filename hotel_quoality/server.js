const express = require('express')
const bodyParser=require('body-parser');
const app = express()
const cors= require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname)); 
app.use(cors)

let routes=require('./routes/index')
app.use('/', routes);

var port =5001;
app.listen(port, ()=>{
    console.log(`server is listening this ${port}`);
});