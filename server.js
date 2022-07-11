const express = require('express')
const cors = require('cors')

const app = express()
const corOptions={
    origin:'https://localhost:8080'
}
//app.use(cors(corOptions))
app.use(cors());
//app.options('*', cors());
// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
//
app.get('/',(req,res)=>{
    res.json({message:'hello from api'})
})
// routers
const router = require('./routes/userRouter.js')
app.use('/api/user', router)
//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    
    console.log(`server is running on port ${PORT}`)
})