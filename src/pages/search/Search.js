import { TextField } from "@mui/material";
import { Tabs} from "@mui/material";
import { Tab} from "@mui/material";
import {Button} from "@mui/material";
import axios from "axios";
import TrendingContent from "../../components/trendingContent/TrendingContent";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/customPagination/CustomPagination";
import "./search.css";


function Search(){

    const[type , setType] = useState(0);
    const[page , setPage] = useState(1);
    const [moviesData , setMoviesData] = useState([]);
    const [totalPages , setTotalPages] = useState();
    const[inputValue , SetInputValue] = useState("");
    function handleChange(e , a){
        setType(a)
    }

    const fetchMoviesData = async () => {
        const {data} = await axios.get(`
        
https://api.themoviedb.org/3/search/${type === 0 ? "movie" : "tv"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&query=${inputValue}&include_adult=false&include_video=false&page=${page}`);

        setMoviesData(data.results)
        setTotalPages(data.total_pages)
    }

    function hello(data){
        setPage(data);
        window.scroll(0,0);
        
    }

    function handleInput(e){
   
        SetInputValue(e.target.value)
    }

    function searchData(){
        fetchMoviesData();
        setType(0)
    }

    useEffect(() => {
        fetchMoviesData();
        // eslint-disable-next-line
    } , [type, page])

    return(
        <div>
            <div>
                <div className="search">
                    <TextField id="outlined-basic" value={inputValue}
                    label="Search" variant="outlined" onChange={handleInput}/>
                    <Button variant="text" onClick={searchData}>Search</Button>
                </div>
                <Tabs value={type} onChange={handleChange} centered>
                    <Tab label="Movies" />
                    <Tab label="TV Series" />
                </Tabs>
            </div>
            <div className="page-content">
                {
                    moviesData && moviesData.map((c) => {
                        
                        return <TrendingContent key={c.id} id={c.id} title={c.name || c.title}
                                poster={c.poster_path} media_type={type === 0 ? "movie" : "tv"} 
                                release_date={c.first_air_date || c.release_date}
                                vote={c.vote_average}
                                />

                    }) 

                
                }
                
            </div>
            {
                    !moviesData && <p>No data found</p>
            }
            {
                totalPages > 0 && <CustomPagination func={hello} numberOfPage = {totalPages > 500 ? 500 : totalPages}/>
            }
            
        </div>
    );
}

export default Search;