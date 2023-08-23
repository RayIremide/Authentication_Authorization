const express = require('express')
const bodyParser =require('body-parser')
const itemRouter = require('./Inventory/items.router')
const userRouter = require('./Users/users.router')



const app =express()

app.use(express.json())


app.use('/items',itemRouter)


app.use('/users',userRouter)

app.get('*',(req,res)=>{
    res.status(404).json({
        data: null,
        error:"Route not found"
    })
})






const port = 4646

app.listen(port,()=>{
    console.log(`Server listening attentively at ${port}`)
})
