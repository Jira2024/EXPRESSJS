// controller/userController.js

// const { get } = require('../routes/userRoute');
const { get } = require('../routes/productRoute');
const productService = require('../services/productService');

// สร้างฟังก์ชันในการอ่านข้อมูลผู้ใช้ทั้งหมด
const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts()
        res.status(200).json(products);
    } catch (error) {
        // res.status(500).json({ error: error.message });
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        // res.status(500).json({ error: error.message });
        next(error);
    }
};

const addProduct = async (req, res, next) => {
    // รับค่าจากผู้ใช้   
    const { name, price, qty } = req.body;

    try {
        const product = await productService.addProduct(
            name, 
            price, 
            qty
        );
        res.status(200).json(product);
    } catch (error) {
        // res.status(500).json({ error: error.message });
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    // รับค่าจากผู้ใช้   
    const { id, name, price, qty } = req.body;   

    try {
        const product = await productService.updateProduct(
            id, 
            name, 
            price, 
            qty
        );
        res.status(200).json(product);
    } catch (error) {
        // res.status(500).json({ error: error.message });
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    // รับค่าจากผู้ใช้   
    // const { id } = req.body;   

    try {    
        // const product = await productService.deleteProduct(id);
        const product = await productService.deleteProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        // res.status(500).json({ error: error.message });
        next(error);
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};