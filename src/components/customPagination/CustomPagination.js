import { Pagination } from "@mui/material";
import "./customPagination.css";
function CustomPagination({func , numberOfPage = 10}){

    function handlePage(page){
        func(page)
    }

    return (
        <div className="pagination">
            <Pagination count={numberOfPage} onChange={(e) => handlePage(e.target.textContent)} color={"primary"}/>
        </div>
    )
}

export default CustomPagination;