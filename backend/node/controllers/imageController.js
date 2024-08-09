// controllers/imageController.js
const multer = require("multer");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "invntzA!#",
  database: "sustainabilitydb2",
});

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImage = () => {
  
  bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }),
    (req, res) => {
      try {
        console.log("Received image:", req);
        fs.writeFile("image.jpeg", req.body, (error) => {
          if (error) {
            throw error;
          }
        });

        res.sendStatus(200);
      } catch (error) {
        console.error("Error uploading image:", error);
        res.sendStatus(500);
      }
    };
  // const imageName = req.file.originalname;
  // const imageData = req.file.buffer;

  // // Insert the image into the database
  // const query = 'INSERT INTO images (image_name, image_data) VALUES (?, ?)';
  // db.query(query, [imageName, imageData], (err, results) => {
  //     if (err) {
  //         console.error('Error storing image:', err);
  //         return res.status(500).json({ error: 'Error storing image' });
  //     }
  //     res.status(201).json({ message: 'Image uploaded successfully', imageId: results.insertId });
  // });
};

// Export the upload middleware and uploadImage method
module.exports = {
  upload: upload.single("image"),
  uploadImage,
};
