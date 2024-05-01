const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const movieRoutes = require('./api/routes/movieRoutes');
const db = require('./config/dbConfig');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Verify database connection before starting the server
db.getConnection((err, connection) => {
    if (err) {
        console.error("Failed to connect to the database: ", err);
        return; 
    }
    console.log("Connected to the database successfully!");
    if (connection) connection.release(); 
});

// Use routes
app.use('/api', movieRoutes);

app.listen(3001, '0.0.0.0', () => {
    console.log("Running on port 3001");
});
