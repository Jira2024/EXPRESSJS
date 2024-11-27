const db = require('../utils/db');
const User = require('../models/userModel');

// สร้างฟังก์ชันในการอ่านข้อมูลผู้ใช้ทั้งหมดออกมา
const getAllUsers = async () => {
    try {
        const client = await db.connect(); // เชื่อมต่อฐานข้อมูล
        const result = await client.query('SELECT * FROM public.user'); // ดึงข้อมูล

        client.release(); // ปิดการเชื่อมต่อฐานข้อมูล

        //One Record

        // if (result.rows.length > 0) {
        //     const { id, firstname, lastname, email, phone } = result.rows[0];
        //     return new User(id, firstname, lastname, email, phone);
        // } else {
        //     return null;}

        // multiple record
        // const users = result.rows.map((user) => new User(user.id, user.firstname, user.lastname, user.email, user.phone));
        // return users;
        return result.rows.map(row => new User(
            row.id,
            row.firstname, 
            row.lastname, 
            row.email, 
            row.phone
        ))

    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getAllUsers
}