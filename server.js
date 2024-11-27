// import express
const express = require('express');

// Import Cors
const cors = require('cors');

// import Routes
// const productRouter = require('./routes/productRoutes');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');


// Create an instance of express
const app = express();
app.use(express.json());
app.use(cors({
        // origin: ["http://itgenius.co.th", "https://www.google.com"]
        origin: "*", // อนุญาตให้เข้าถึงจากทุกๆ domain
        methods: ["GET", "POST", "PUT", "DELETE"], // กำหนด method ที่ให้ใช้งาน
    }
));


// use Routes
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// Create a port
const port = 3000;

// start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}); 