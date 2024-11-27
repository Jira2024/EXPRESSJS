const express = require("express");

// import Database
const db = require('../utils/db');

// Create an instance of express
const router = express.Router();


// Create a route
// ทดสอบการเชื่อมต่อฐานข้อมูล postgres
router.get('/testdb', async (req, res) => {
    try {
        const client = await db.connect(); // เชื่อมต่อฐานข้อมูล
        const result = await client.query('SELECT * FROM public.user'); // ดึงข้อมูล
        //console.log(result.rows);
        res.send(result.rows);
        //client.release();
    } catch (error) {
        console.error(error);
    }
})


router.get('/', (req, res) => {
    res.send('Hello Node JS!');
});

router.get('/about', (req, res) => {
    res.send('About Node JS!');
});

router.get('/product', (req, res) => {
    res.send('Get Product JS!');
});

router.post('/product', (req, res) => {
    res.send('Add Product Node JS!');
});

router.put('/product', (req, res) => {
    res.send('Edit Product Node JS!');
});

router.delete('/product', (req, res) => {
    res.send('Delete Product Node JS!');
});




module.exports = router;
