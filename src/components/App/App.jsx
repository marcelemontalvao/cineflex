import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import MoviesList from '../../pages/MoviesList/MoviesList.jsx';
import MoviePage from '../../pages/MoviePage/MoviePage.jsx';
import MovieSeats from '../../pages/MovieSeats/MovieSeats.jsx';
import SucessPage from '../../pages/SucessPage/SucessPage.jsx';
import { useState } from 'react';

function App() {
  const [infoMovie, setInfoMovie] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [response, setResponse] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<MoviesList />} />
          <Route path='/sessoes/:idMovie' element={<MoviePage infoMovie={infoMovie} setInfoMovie={setInfoMovie} />} />;
          <Route path='/assentos/:idSeat' element={<MovieSeats selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} name={name} setName={setName} cpf={cpf} setCpf={setCpf}  response={response} setResponse={setResponse} />} />;
          <Route path='/sucesso' element={<SucessPage infoMovie={infoMovie} setInfoMovie={setInfoMovie} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} name={name} setName={setName} cpf={cpf} setCpf={setCpf} response={response} setResponse={setResponse} />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
