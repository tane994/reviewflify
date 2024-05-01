const express = require('express');
const router = express.Router();
const movieControllers = require('../controllers/movieControllers')

router.get('/get', movieControllers.getMovies);
router.post('/insert', movieControllers.insertMovie);
router.delete('/delete', movieControllers.deleteMovie);
router.put('/update/:movieName', movieControllers.updateMovie);

module.exports = router;
