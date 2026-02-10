const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/about',(req,res)=>{
    res.send('About Page')
})
app.get('/contact',(req,res)=>{
    res.send('Contact Page')
})
app.get('/product',(req,res)=>{
    res.send('Product Page')
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})