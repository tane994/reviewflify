const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/databaseConfig')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Verify database connection before starting the server
db.getConnection((err, connection) => {
    if (err) {
        console.error("Failed to connect to the database: ", err);
        return; // Optionally, you might want to halt further execution or handle retries
    }
    console.log("Connected to the database successfully!");
    if (connection) connection.release(); // Release the connection back to the pool
});

app.get('/api/get', (req, res) => {
    sqlSelectStatement = "SELECT movieName, movieReview FROM movie_data";
    db.query(sqlSelectStatement, (err, result) => {
        if(err) {
            console.error("Error executing query: ", err);
            res.status(500).send("Failed to retrieve data");
            return;
        }
        console.log(result);
        res.send(result);
    } )
});

app.delete('/api/delete', (req, res) => {
    const sqlDeleteStatement = "DELETE FROM movie_data WHERE movieName = ?";
    const movieName = req.body.movieName;
    db.query(sqlDeleteStatement, movieName, (err, result) => {
        if (err) {
            console.error("Error executing query: ", err);
            res.status(500).send("Failed to insert data");
            return;
        }
        res.send("Data deleted successfully");
    })
})

app.put('/api/update/:movieName', (req, res) => {
    const sqlUpdateStatement = 'UPDATE movie_data SET movieReview = ? WHERE movieName = ?'
    const updatedMovieReview = req.body.movieReview;
    const movieName = req.params.movieName;

    db.query(sqlUpdateStatement, [updatedMovieReview, movieName], (err, result) => {
        if (err) {
            console.error("Error executing query: ", err);
            res.status(500).send("Failed to insert data");
            return;
        }
        res.send("Data updated successfully");
    })
});



app.post('/api/insert', (req, res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const sqlInsertStatement = 'INSERT INTO movie_data (movieName, movieReview) VALUES (?,?)';
    db.query(sqlInsertStatement, [movieName, movieReview], (err, result) => {
        if (err) {
            console.error("Error executing query: ", err);
            res.status(500).send("Failed to insert data");
            return;
        }
        console.log(result);
        res.send("Data inserted successfully");
    });
});


app.listen(3001, '0.0.0.0', () => {
    console.log("Running on port 3001");
});
