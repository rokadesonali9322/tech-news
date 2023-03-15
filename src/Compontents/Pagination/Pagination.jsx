
import "./Pagination.css"
import { useGlobalContext } from "../../Context"


const Pagination = () =>{
    const {page,nbPages,getprevpage,getnextpage} = useGlobalContext();
    return(
        <>
      <div className="pagination">
          <button onClick={()=>getprevpage()}>PREV</button>
          <p>{page + 1} of {nbPages} </p>
          <button onClick={()=>getnextpage()}>NEXT</button>
         </div>
        </>
    )
}

export default Pagination