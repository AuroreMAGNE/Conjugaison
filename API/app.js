require('dotenv').config();

const express = require('express');
const router = require();

const app = express();

app.get('/', (request,response) =>{
    response.send('Hello World!");
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});