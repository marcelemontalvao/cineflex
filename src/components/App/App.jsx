import './AppStyles.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import MoviesList from '../../pages/MoviesList/MoviesList.jsx';
import MoviePage from '../../pages/MoviePage/MoviePage.jsx';
import MovieSeats from '../../pages/MovieSeats/MovieSeats.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<MoviesList />} />
          <Route path='/sessoes/:idMovie' element={<MoviePage />} />
          <Route path='/sessoes/:idSeat' element={<MovieSeats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
