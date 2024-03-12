const express = require('express')
const app = express()
const ejs= require('ejs')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
let todo=[]



app.get('/',(request, response)=>{
    response.render('index' , {name:"keenah", Gender:"female", age:"15", department:"java", 
    email:"he@gmail.com"})
})

app.get("/login",(req, res)=>{
    res.render('login', {todo: todo})
    
})

app.post("/todo",(req, res)=>{
    console.log(req.body);
    const {title, content} =req.body
    todo.push({title, content})
    console.log(todo)
    res.redirect('login')
})

app.post("/delete/:index",(req, res)=>{
    console.log(req.params);
    const{index} = req.params
    todo.splice(index,1)
    res.redirect('/login')

})

// app.get("/edit",(req, res)=>{
//     res.render('edit', {todo: todo})
    
// })

// app.get("/edit/:index",(req, res)=>{
//     res.redirect('/edit')
    
// })








const portal =7000
app.listen(portal,()=>{
    console.log(`app started on port ${portal}`);
})