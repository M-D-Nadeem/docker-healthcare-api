import Services from "../model/servicesSchema.js";

const getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
     res.status(200).json({
      success: true,
      message: "Fetched all services successfully",
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in fetching the services: ${error}`,
    });
  }
};
export default getAllServices;
