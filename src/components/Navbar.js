import React , {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./navbar.css";
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate();

  useEffect(() => {
    if(value === "recents") navigate("/");
    else if(value === "movies") navigate("/movies");
    else if(value === "tv Series") navigate("/series");
    else if(value === "search") navigate("/search");
  } , [navigate, value])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='navbar'>
    <BottomNavigation style={{backgroundColor : "#E3E0F3"}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Trending"
        value="recents"
        icon={<WhatshotRoundedIcon />}
      />
      <BottomNavigationAction
        label="Movies"
        value="movies"
        icon={<MovieCreationRoundedIcon />}
      />
      <BottomNavigationAction
        label="Tv Series"
        value="tv Series"
        icon={<TvRoundedIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchRoundedIcon />}
      />
    </BottomNavigation>
    </div>
  );
}
