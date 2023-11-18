import { useEffect, useState } from 'react';
import SearchIcon from "../src/search.svg";
import './App.css';
import Moviecard from './Moviecard';
const API_URL = 'http://www.omdbapi.com/?apikey=5be85781';
function App() {
  const [movies, setMovies] = useState([]);
  const[searchTerm,setSearcTerm]=useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

  }
  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieBox</h1>
      <div className='search'>
        <input placeholder='search for movies' value={searchTerm} onChange={(e) => setSearcTerm(e.target.value)} />
        <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies.length > 0 ?
        (<div className='container'>
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </div>)
        : (<div className='empty'><h2>No Movies</h2></div>)}

    </div>
  );
}

export default App;
