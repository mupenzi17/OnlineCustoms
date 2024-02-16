const express = require('express');
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("<h3>Online customer</h3>");
});
app.get("/chance", (req, res) => {
    res.render('chance');
})

app.listen(3000, ()=>{
    console.log("Server is running");
});