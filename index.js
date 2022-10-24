const express =require('express');
const app=express();
const cors =require('cors');
const port = process.env.PORT || 5000;


const universities = require('./Data/data.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Education Electrical Engineering API Running');
});

app.get('/universities', (req, res) =>{
    res.send(universities);
});

app.get('/universities/:id', (req, res) => {
    
    const id =parseInt(req.params.id) ;
    const selecteduniversitiesid = universities.find(uni => uni.id == id);
    console.log(selecteduniversitiesid);
    res.send(selecteduniversitiesid);
});




app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})
