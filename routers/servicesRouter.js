import express from "express"
import addService from "../controller/addServicesController.js"
import getAllServices from "../controller/getAllServicesController.js"
import modifyService from "../controller/modifyServicesController.js"
import deleteService from "../controller/deleteServicesContoller.js"
const servicesRouter=express.Router()

servicesRouter.post("/addService",addService)
servicesRouter.get("/getAllService",getAllServices)
servicesRouter.post("/modifyService/:id",modifyService)
servicesRouter.delete("/deleteService/:id",deleteService)

export default servicesRouter
