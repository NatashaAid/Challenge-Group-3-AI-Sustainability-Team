// index.js
const express = require('express');
const imageRoutes = require('./routes/imageRoutes');
const materialRoutes = require('./routes/materialRoutes');
const sustainableSuppliesRoutes = require('./routes/sustainableSuppliesRoutes');
const sustainableManufacturersRoutes = require('./routes/sustainableManufacturingRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(require('./middlewares/loggerMiddleware'));

// Routes
app.use('/api/imageRoutes', imageRoutes);
app.use('/api/materialRoutes', materialRoutes);
app.use('/api/sustainableSuppliesRoutes', sustainableSuppliesRoutes);
app.use('/api/sustainableManufacturersRoutes', sustainableManufacturersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
