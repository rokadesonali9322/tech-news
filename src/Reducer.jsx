

const Reducer = (state,action) =>{
    switch(action.type){
        case 'Set_loading':
            return{
                ...state,
                isloading:true,
            };
        case "Get_stories":
            return{
                ...state,
                isloading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,
            };
            case "Remove_post":
                return {
                ...state,
                hits:state.hits.filter((curelem)=> 
               curelem.objectID !== action.payload 
                  )
                };
                case "serch_query":
                    return{
                        ...state,
                        query:action.payload
                    }


                    case "prev_page":
                        let pageNum = state.page - 1;
                        if(pageNum <= 0){
                            pageNum=0;
                        }
                        return{
                            ...state,
                            page:pageNum,
                        }


                        case "next_page":
                            let pageNumInc = state.page + 1;
                            if(pageNumInc >= state.nbPages){
                                pageNumInc = 0;
                            }
                            return{
                                ...state,
                                page:pageNumInc,
                            }

    }
    return state;
};

export default Reducer;