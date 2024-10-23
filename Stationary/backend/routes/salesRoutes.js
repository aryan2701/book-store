const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// Routes for managing sales
router.post('/', salesController.processSale);
router.get('/invoice/:id', salesController.getInvoice);

module.exports = router;
