// MovieApp.jsx
import React, { useState } from 'react';
import MovieList from '../movie/MovieList';
import MovieModal from '../movie/MovieModal';

export default function MovieApp() {
  const [movies, setMovies] = useState([{}]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  const addMovie = () => {
    if (!title) return;
    // setMovies([...movies, { id: Date.now(), title, review }]);

    let movieCopy = [...movies]
    // let newMovieList = {id:Date.now(), title, review}
    // console.log('오브젝트 배열'+newMovieList.id)
  //  첫 번째 방법 
    // movieCopy.push(newMovieList)
    // setMovies(movieCopy);

    let newMovie ={id:movies.length, title:title, review:review}
    console.log(movies.length)
    movieCopy.push(newMovie)
    setMovies(movieCopy)
    setTitle('');
    setReview('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>영화 리뷰 관리 앱 🎬</h2>
      <input
        placeholder="영화 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="리뷰"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button onClick={addMovie}>추가</button>

      <MovieList movies={movies} onSelect={setSelectedMovie} />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
