import './AppStyles.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import MoviesList from '../../pages/MoviesList/MoviesList.jsx';
import MoviePage from '../../pages/MoviePage/MoviePage.jsx';
import MovieSeats from '../../pages/MovieSeats/MovieSeats.jsx';
import { useState } from 'react';

function App() {
  const [isMovieSeats, setIsMovieSeats] = useState(undefined)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<MoviesList setIsMovieSeats={setIsMovieSeats} />} />
          <Route path='/sessoes/:idMovie' element={<MoviePage isMovieSeats={isMovieSeats} setIsMovieSeats={setIsMovieSeats} />} />
          <Route path='/assentos/:idSeat' element={<MovieSeats isMovieSeats={isMovieSeats} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
