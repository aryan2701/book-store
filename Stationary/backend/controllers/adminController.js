
const Product = require('../models/productModel'); 

// Controller to get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve products', error: err });
    }
};

// Controller to add a new product
exports.addProduct = async (req, res) => {
    const { name, category, price, stock } = req.body;

    if (!name || !category || !price || !stock) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const newProduct = new Product({
            name,
            category,
            price,
            stock
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add product', error: err });
    }
};

// Controller to update a product
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update product', error: err });
    }
};

// Controller to delete a product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete product', error: err });
    }
};
