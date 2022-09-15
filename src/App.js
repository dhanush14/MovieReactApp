
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import MainNavigation from './layout/MainNavigation';
import AddMovie from './pages/AddMovie'
import AllMovies from './pages/AllMovies'
import Favorites from './pages/Favorites'

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
      <Route path="/" element={<AllMovies/>}/>
      <Route path="/addMovie" element={<AddMovie/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
