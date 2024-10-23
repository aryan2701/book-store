const Sales = require('../models/salesModel');
const InvoiceGenerator = require('../utils/invoiceGenerator');

exports.processSale = async (req, res) => {
    const sale = new Sales(req.body);
    try {
        const savedSale = await sale.save();
        // Generate and send invoice
        const invoice = await InvoiceGenerator.generateInvoice(savedSale);
        res.status(201).json({ sale: savedSale, invoice });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getInvoice = async (req, res) => {
    try {
        const sale = await Sales.findById(req.params.id);
        const invoice = await InvoiceGenerator.generateInvoice(sale);
        res.json({ invoice });
    } catch (err) {
        res.status(404).json({ message: 'Sale not found' });
    }
};
