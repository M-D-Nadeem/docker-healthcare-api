import Services from "../model/servicesSchema.js"

const modifyService=async (req,res)=>{
    try {
        const { name:serviceName, description:serviceDescription, price:servicePrice } = req.body
        const service = await Services.findByIdAndUpdate(req.params.id, { serviceName, serviceDescription, servicePrice }, {new: true, runValidators: true })
        if (!service) {
           res.status(404).json({ error: 'Service not found' });
        }
           
         res.status(200).json({
            success:true,
            message:"Service modified successfully",
            data:service
        }) 
      }
    catch (error) {
        res.status(500).json({
            success:false,
            message:`Error in modifying the service! ${error}`,
        })
      }
}
export default modifyService