import {SEARCH_CONTENT, SEARCH_TIMING} from '../actions/action_types';

const initialState = {
    search_query : '',
    search_timing: ''
}



const SearchReducer= (state = initialState, action) =>{


    switch (action.type) {
        case SEARCH_CONTENT:
            return{
                    ...state,
                    search_query: action.payload
            }         
        case SEARCH_TIMING:
            return{
                    ...state,
                   search_timing: action.payload
            }         
        default: return state;
    }
}

export default SearchReducer;