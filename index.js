const express =require('express');
const app=express();
const cors =require('cors');
const port = process.env.PORT || 5000;


const courses = require('./Data/data.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Computer Engineering Courses API Running');
});

app.get('/courses', (req, res) =>{
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    
    const id =parseInt(req.params.id) ;
    const selectedcoursesid = courses.find(course => course.id == id);
    console.log(selectedcoursesid);
    res.send(selectedcoursesid);
});
app.get('/coursess/:name', (req, res) => {
    
    const name =req.params.name ;
    console.log(name);
    const selectedcoursesname = courses.find(uni => uni.courseName ==name);
    console.log(selectedcoursesname);
    res.send(selectedcoursesname);
});






app.listen(port, () => {
    console.log('Computer Education Server running on port', port);
})
