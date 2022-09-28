import { useEffect, useState } from "react";
import axios from "axios";
import TrendingContent from "../../components/trendingContent/TrendingContent";
import CustomPagination from "../../components/customPagination/CustomPagination";
import Genres from "../../components/Genres";
import useGenres from "../../customHook/useGenres";
import "../../App.css"
function Movies(){

    const [page , setPage] = useState(1)
    const [moviesData , setMoviesData] = useState([]);
    const [totalPages , setTotalPages] = useState();
    const [selectedGenres , setSelectedGenres] = useState([]);
    const [genres , setGenres] = useState([]);
    const linkGenres = useGenres(selectedGenres);

    const fetchMoviesData = async () => {
        const {data} = await axios.get(`
        
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${linkGenres}`);

        
        setMoviesData(data.results)
        setTotalPages(data.total_pages)
    }

    useEffect(() => {
        fetchMoviesData()
        // eslint-disable-next-line
    } , [page , linkGenres])

    function hello(page){
        setPage(page);
        window.scroll(0,0);
    }

    function updateGenres(data){  
        if(Array.isArray(data)){
            setGenres(data)
        }else{
            setGenres([...genres ,data])
        }
        
    }
    function activeGenres(data){
        
        if(Array.isArray(data)){
            setSelectedGenres(data)
        }else{
            setSelectedGenres([...selectedGenres ,data])
        }
    }

    return(
        <div>
            <h1 className="subheading">Movies</h1>
            <Genres
                type = "movie"
                selectedGenres = {selectedGenres}
                genres = {genres}
                setSelectedGenres = {activeGenres}
                setGenres = {updateGenres}
                setPage = {hello}
            />
            <div className="page-content">
                {
                    moviesData.length > 0 ? moviesData.map((c) => {
                        
                        return <TrendingContent key={c.id} id={c.id} title={c.name || c.title}
                                poster={c.poster_path} media_type="Movie" 
                                release_date={c.first_air_date || c.release_date}
                                vote={c.vote_average}
                                />

                    }) : <div className="loader"></div>
                }
            </div>
            <CustomPagination func={hello} numberOfPage = {totalPages > 500 ? 500 : totalPages}/>
        </div>
    );
}

export default Movies;