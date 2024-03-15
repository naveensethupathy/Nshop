import  express  from "express";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 5050;
connectDB();
const app = express()
//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";
app.get('/',(req,res)=>{
    res.send("Api is running");
})
app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})