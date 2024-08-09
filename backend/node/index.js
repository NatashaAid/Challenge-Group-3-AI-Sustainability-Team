// index.js
const express = require('express');
var bodyParser = require('body-parser');
const imageRoutes = require('./routes/imageRoutes');
const materialRoutes = require('./routes/materialRoutes');
const sustainableSupplierRoutes = require('./routes/sustainableSupplierRoutes');
const sustainableManufacturersRoutes = require('./routes/sustainableManufacturersRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests
// app.use(require('./middlewares/loggerMiddleware'));

app.use(bodyParser.raw({
    type: 'image/png',
    limit: '10mb'
  }));

// Routes
app.use('/api/imageRoutes', imageRoutes);
app.use('/api/materialRoutes', materialRoutes);
app.use('/api/sustainableSupplierRoutes', sustainableSupplierRoutes);
app.use('/api/sustainableManufacturersRoutes', sustainableManufacturersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
