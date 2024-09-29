import app from "./app.js";
import dbConnect from "./connection.js";
import dotenv from "dotenv"
dotenv.config()
dbConnect()

const PORT=7000
app.listen(PORT,()=>{ 
    console.log(`Server is running at http://localhost:${PORT}`);
})