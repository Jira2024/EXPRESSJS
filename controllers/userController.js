// controller/userController.js

const userService = require('../services/userService');

// สร้างฟังก์ชันในการอ่านข้อมูลผู้ใช้ทั้งหมด
const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        // res.status(500).json({ error: error.message });
        next(error);
    }
};

module.exports = {
    getAllUsers
};