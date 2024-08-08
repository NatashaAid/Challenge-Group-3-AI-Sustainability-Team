// controllers/imageController.js
const multer = require('multer');
const mysql = require('mysql2');

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImage = (req, res) => {
    const imageName = req.file.originalname;
    const imageData = req.file.buffer;

    // Insert the image into the database
    const query = 'INSERT INTO images (image_name, image_data) VALUES (?, ?)';
    db.query(query, [imageName, imageData], (err, results) => {
        if (err) {
            console.error('Error storing image:', err);
            return res.status(500).json({ error: 'Error storing image' });
        }
        res.status(201).json({ message: 'Image uploaded successfully', imageId: results.insertId });
    });
};

// Export the upload middleware and uploadImage method
module.exports = {
    upload: upload.single('image'),
    uploadImage
};
