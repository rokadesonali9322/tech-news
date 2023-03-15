import "./Stories.css"
import { useGlobalContext } from "../../Context";

const Stories = () =>{
 const {hits,isloading,removePost}= useGlobalContext();   
    
  if(isloading){
      return <>
      <h1>Loading......</h1>
      </>
  }

    return(
  <div className="stories-div">
      {hits.map((curpost)=>{
        const {title,author,objectID,url,num_comments} = curpost;
        // console.log(objectID);
        return (
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p> by <span>{author}</span> | <span> {num_comments}</span> coments</p>
            <div className="card-button">
              <a href={url} target="_blank"  rel="noreferrer noopener">Read More</a>
                <a href="#"  rel="noreferrer noopener" onClick={()=>removePost(objectID)}
                 className="remove">Remove</a> 
               
              </div>
            </div>
        )
      })}
      </div>
    )
}


export default Stories;