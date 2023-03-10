import express from "express";
import path from 'path';
// import data from "./data.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import seedRouter from "./routes/seedRoutes.js";
import productRouter from './routes/productRoutes.js'
import userRouter from "./routes/UserRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://surajbharti:Bharti%40123@cluster0.gbwzmdu.mongodb.net/maylbi",{
    useNewUrlParser:true
})

.then(() => console.log("mongoose.connected"))
.catch(err => console.log(err)) 

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/keys/paypal',(req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')  // sb = sand box
})


app.use('/api/seed',seedRouter)
app.use('/api/products',productRouter);
app.use('/api/users', userRouter)
app.use ('/api/orders',orderRouter)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*',(req,res)=>
res.sendFile(path.join(__dirname,'/frontend/build/index.html')));
app.use((err,req,res,next) => {
    res.status(500).send({message:err.message});
});


const port = process.env.PORT || 5000 ;
app.listen(port , () =>{
    console.log(`serve at http://localhost:${port}`);;
})