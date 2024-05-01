const db = require('../../config/dbConfig');

exports.getMovies = (req, res) => {
    const sqlSelect = "SELECT movieName, movieReview FROM movie_data";
    db.query(sqlSelect, (err, result) => {
        if(err) {
            console.error("Error executing query: ", err);
            res.status(500).send("Failed to retrieve data");
            return;
        }
        console.log(result);
        res.send(result);
    });
};

exports.insertMovie = (req, res) => {
    const { movieName, movieReview } = req.body;
    const sqlInsert = 'INSERT INTO movie_data (movieName, movieReview) VALUES (?,?)';
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        if (err) {
            console.error("Error executing query: ", err);
            res.status(500).send("Failed to insert data");
            return;
        }
        console.log(result);
        res.send("Data inserted successfully");
    });
};

exports.deleteMovie = (req, res) => {
    const sqlDelete = "DELETE FROM movie_data WHERE movieName = ?";
    const movieName = req.body.movieName;
    db.query(sqlDelete, movieName, (err, result) => {
        if (err) {
            console.error("Error executing query: ", err);
            res.status(500).send("Failed to delete data");
            return;
        }
        res.send("Data deleted successfully");
    });
};

exports.updateMovie = (req, res) => {
    const sqlUpdate = 'UPDATE movie_data SET movieReview = ? WHERE movieName = ?';
    const { movieReview } = req.body;
    const { movieName } = req.params;
    db.query(sqlUpdate, [movieReview, movieName], (err, result) => {
        if (err) {
            console.error("Error executing query: ", err);
            res.status(500).send("Failed to update data");
            return;
        }
        res.send("Data updated successfully");
    });
};
