import Services from "../model/servicesSchema.js";

const addService = async (req, res) => {
  const {
    name: serviceName,
    description: serviceDescription,
    price: servicePrice,
  } = req.body;
  console.log(serviceName);

  if (!serviceName || !servicePrice) {
     res
      .status(500)
      .json({ error: "Service name and price are required." });
  }
  if (servicePrice < 0) {
     res
      .status(500)
      .json({ error: "Service price can not be less than 0" });
  }

  try {
    const service = await Services.create({
      serviceName,
      serviceDescription,
      servicePrice,
    });
    if (!service) {
       res.status(500).json({ error: "Failed to add service!" });
    }
    res.status(200).json({
      success: true,
      message: "Service added successfully.",
      data: service,
    });
  } catch (error) {
     res.status(500).json({
      success: false,
      message: `Error in adding the service! ${error}`,
    });
  }
};
export default addService;
