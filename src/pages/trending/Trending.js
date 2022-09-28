import axios from "axios";
import { useEffect, useState } from "react";
import "./trending.css";
import TrendingContent from "../../components/trendingContent/TrendingContent";
import CustomPagination from "../../components/customPagination/CustomPagination";
import "../../App.css"
function Trending(){

    const [trendingData , setTrendingData] = useState([]);
    const [page , setPage] = useState(1);

    const fetchTrendingData = async () => {
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        
        setTrendingData(data.results);

    }

    useEffect(() => {
        fetchTrendingData()
    } ,[page])

    function hello(page){
        setPage(page);
        window.scroll(0,0);
    }

    return(
        <div>
            <h1 className="subheading">Trending</h1>
            <div className="page-content">
                {
                    trendingData.length > 0 ? trendingData.map((c) => {
                        
                        return <TrendingContent key={c.id} id={c.id} title={c.name || c.title}
                                poster={c.poster_path} media_type={c.media_type} 
                                release_date={c.first_air_date || c.release_date}
                                vote={c.vote_average}
                                />

                    }) : <div className="loader"></div>
                }
            </div>
            <CustomPagination func={hello} />
        </div>
    );
}

export default Trending; 