import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

function Genres({
    type,
    selectedGenres ,
    genres ,
    setSelectedGenres,
    setGenres ,
    setPage
}){

    const fetchGenres = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setGenres(data.genres)
    }

    function handleAdd(genre){
        setSelectedGenres(genre);
        setGenres(genres.filter((g) => {
            return g.id !== genre.id;
        }))
        setPage(1)
    }

    function handleRemove(genre){
        setSelectedGenres(selectedGenres.filter((s) => {
            return s.id !== genre.id;
        }))
        setGenres(genre);
        setPage(1)
    }

    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres({});
          };
    } , [])



    return(
        <div>
        {
            selectedGenres && selectedGenres.map((genre) => {
                   return <Chip label={genre.name} 
                            style={{margin : 2}} 
                            key={genre.id}
                            color="primary"
                            onDelete={() => handleRemove(genre)}
                            clickable/>
                })
            }
            {
                genres && genres.map((genre) => {
                   return <Chip label={genre.name} 
                            style={{margin : 2}} 
                            key={genre.id}
                            onClick = {() => handleAdd(genre)}
                            clickable/>
                })
            }
        </div>
    )
}

export default Genres;