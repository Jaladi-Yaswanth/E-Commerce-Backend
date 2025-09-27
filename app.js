import express from "express"
import cors from "cors"


const app= express();



//Middleware
app.use(express.json());
app.use(cors());

//DB Connection
//connectDB();




app.get("/",(req,res)=>{
    res.send("API Working");
});


app.get("/health",(req,res)=>{
    res.status(200).json({message:"OK"});
})



export default app;


