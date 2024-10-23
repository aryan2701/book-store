const PDFDocument = require('pdfkit');

exports.generateInvoice = async (sale) => {
    const doc = new PDFDocument();
    let invoiceData = `Invoice for Sale ID: ${sale._id}\n`;
    
    sale.items.forEach(item => {
        invoiceData += `Item: ${item.product.title} - Quantity: ${item.quantity}\n`;
    });

    doc.text(invoiceData);
    doc.end();

    return doc;
};
