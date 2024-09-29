import express from "express"
import servicesRouter from "./routers/servicesRouter.js"

const app=express()

// app.use("/",(req,res)=>{
//     res.send("Hello this is healthcare-api running")
// })
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/healthcare",servicesRouter)

export default app;