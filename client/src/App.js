import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import '@fontsource/roboto/700.css';
import MovieListSection from "./components/MovieListSection";
import NavigationBar from "./components/NavigationBar";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer"

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);
  const [updatedReview, setUpdatedReview] = useState([]);

  console.log(movieReviewList);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get")
      .then((response) => {
        setMovieReviewList(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    })
      .then((response) => {
        setMovieReviewList((prev) => [
          ...prev,
          {
            movieName: movieName,
            movieReview: review,
          },
        ]);
      })
      .catch((error) => console.error("Error posting data:", error)); // It's good to handle potential errors.
  };

  const deleteReview = (name) => {
    Axios.delete("http://localhost:3001/api/delete", {
      data: { movieName: name },
    })
      .then((response) => {
        setMovieReviewList(movieReviewList.filter((movie) => movie.movieName !== name));
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const updateReview = (name) => {
    Axios.put(`http://localhost:3001/api/update/${name}`,
      { movieReview: updatedReview }
    );
  }

  return (
    <div className="App">
      <NavigationBar/>
      <div className="main-content">
        <FormSection
          submitReview={submitReview}
          movieName={movieName}
          setMovieName={setMovieName} 
          review={review}
          setReview={setReview}
         /> 
        <MovieListSection 
          movieReviewList={movieReviewList}
          deleteReview={deleteReview} 
          updateReview={updateReview}
          setUpdatedReview={setUpdatedReview}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;


