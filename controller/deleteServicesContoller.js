import Services from "../model/servicesSchema.js"

const deleteService=async (req,res)=>{
    try {
        const service = await Services.findByIdAndDelete(req.params.id)
        if (!service) {
           res.status(404).json({ error: 'Service not found' })
        } 
          res.status(200).json({
            success:true,
            message:"Service deleted successfully",
        })
      } 
    catch (error) {
        res.status(500).json({
            success:false,
            message:`Error in deleting the service! ${error}`,
        })
      }
}
export default deleteService