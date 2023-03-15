import React, { useContext, useReducer ,useEffect} from "react";
import Reducer from "./Reducer";

let api="https://hn.algolia.com/api/v1/search?";


const initialState= {
    isloading:true,
    query:"html",
    nbPages:0,
    page:0,
    hits:[],
};

const Appcontext = React.createContext();
// to create a provider function
const AppProvider = ({children}) =>{

    const [state,dispatch]=useReducer(Reducer,initialState);

    const fetchAPIdata = async(url) =>{
        dispatch({type:"Set_loading"});
    try {
      const res= await fetch(url);
      const data = await res.json();
      console.log(data);

      dispatch({type:"Get_stories",
    payload:{
        hits:data.hits,
        nbPages:data.nbPages,
    },
});
    }catch(error){
   console.log(error);
    }
    };

// to remove the post
const removePost = (post_ID) =>{
    console.log(post_ID);
    dispatch({type:"Remove_post", payload: post_ID});
}

// serch 
const serchpost =(serchquery) =>{
    dispatch({type:"serch_query",
    payload:serchquery});
}
// pagination prev
const getprevpage = () =>{
    dispatch({type:"prev_page"})
}
const getnextpage = () =>{
    dispatch({type:"next_page"})
}
    useEffect(()=>{
        fetchAPIdata(`${api}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page ]);
    return(
      <Appcontext.Provider value={{...state,removePost,serchpost,getnextpage,getprevpage}}>
          {children}
      </Appcontext.Provider>
    )
}

// custom hook
const useGlobalContext = () =>{
    return( useContext(Appcontext) 
    )
}
export {AppProvider,Appcontext,useGlobalContext};