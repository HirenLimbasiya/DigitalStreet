
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import LabelBottomNavigation from "./components/Navbar";
import Trending from './pages/trending/Trending';
import Series from "./pages/series/Series";
import Movies from "./pages/movies/Movies";
import Search from "./pages/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <div className="App">
          <Container>
            <Routes>
                <Route path='/' element={<Trending/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/series' element={<Series/>}/>
                <Route path='/search' element={<Search/>}/>
            </Routes>
          </Container>
        </div>
      <LabelBottomNavigation/>
    </BrowserRouter>
    
  );
}

export default App;
