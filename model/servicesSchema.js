import mongoose from "mongoose";

const servicesSchema=new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
        minlength: [3,"Service name must be at least 3 characters long"], 
        maxlength: [50,"Service name cannot be more than 50 characters long"],
        // unique:true,  
        //If we add unique:true then no dublicate services is allowed to be stored in database
      },
      serviceDescription: {
        type: String,
        maxlength: [255,'Description cannot be more than 255 characters'], 
      },
      servicePrice: {
        type: Number,
        required: true,
        validate: {
          validator: function(value) {
            return value > 0; 
          },
          message: 'Service price cannot be less than 0', 
        }
      },
},{timestamps:true})

export default mongoose.model("Services",servicesSchema)