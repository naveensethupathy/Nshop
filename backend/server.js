import  express  from "express";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 5050;
connectDB();
const app = express()
import productRoutes from "./routes/productRoute.js";
app.get('/',(req,res)=>{
    res.send("Api is running");
})
app.use('/api/products',productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})