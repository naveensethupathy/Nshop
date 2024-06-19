import path from "path";
import  express  from "express";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
connectDB();
import uploadRoutes from "./routes/uploadRoutes.js";
const port = process.env.PORT || 5050;

const app = express()
//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload',uploadRoutes);
app.get('/api/config/paypal',(req,res)=>res.send({clientId:process.env.PAYPAL_CLIENT_ID}));
const __dirname = path.resolve();
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
}
else{
    app.get('/',(req,res)=>{
        res.send("Api is running");
    })
}

app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})