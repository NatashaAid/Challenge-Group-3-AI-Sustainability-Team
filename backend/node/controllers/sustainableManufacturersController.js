const mysql = require('mysql2');

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'invntzA!#',
    database: 'sustainabilitydb2'
});

const getSustainableManufacturers = (req, res) => {
    const query = 'Select * FROM materials';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error storing image:', err);
            return res.status(500).json({ error: 'Error storing image' });
        }
        res.status(201).json({ message: 'Image uploaded successfully', results });
    });

}


module.exports = {
    getSustainableManufacturers
};
