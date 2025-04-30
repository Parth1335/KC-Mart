const express = require('express');
const path = require('path');
const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html at root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// (Optional) Dummy API to simulate backend
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop A', price: 202 },
        { id: 2, name: 'Laptop B', price: 221 },
        { id: 3, name: 'Laptop C', price: 79 },
    ];
    res.json(products);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
