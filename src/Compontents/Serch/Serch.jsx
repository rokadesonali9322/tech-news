import "./Serch.css"
import {useGlobalContext} from "../../Context"

const Serch = () =>{
    const {query,serchpost}  =useGlobalContext();
    return(
        <>
       <div className="serch-box">
           <h2>Tech news serch website </h2>
           <form onSubmit={(e)=>e.preventDefault()}>
               <input type="text" placeholder="Serch"
               value={query} onChange={(e)=>serchpost(e.target.value)}/>
           </form>
           </div>
        </>
    )
}

export default Serch;