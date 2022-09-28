import { Badge } from "@mui/material";
import React from "react";
import { img_300 ,unavailable } from "../../config/config";
import "./trendingContent.css";

function TrendingContent({
    id,
    title,
    poster,
    media_type,
    release_date,
    vote
}){
    return(
        <div className="single-info">
            <Badge badgeContent={vote.toFixed(1)} color={vote > 5 ? "primary" : "secondary"}/>
            <img src={poster ? `${img_300}${poster}` : unavailable} alt={title}/>
            <h3 className="title">{title}</h3>
            <div className="type-date">
                <span className="type">{media_type === "tv" ? "TV Series" : "Movie"}</span>
                <span className="date">{release_date}</span>
            </div>
        </div>
    )
}

export default TrendingContent;