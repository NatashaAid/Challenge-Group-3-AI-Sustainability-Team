const mysql = require('mysql2');

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'invntzA!#',
    database: 'sustainabilitydb2'
});


const getSustainableSuppliers = (req, res) => {
    const query = 'SELECT * FROM suppliers WHERE SupplierID IN (1, 13, 7)';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error storing image:', err);
            return res.status(500).json({ error: 'Error storing image' });
        }
        res.status(201).json({ message: 'Image uploaded successfully', results });
    });

}


module.exports = {
    getSustainableSuppliers
};
