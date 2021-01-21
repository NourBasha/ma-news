
import * as ACTION_TYPES from './action_types';




export const setSearchContent = (payload) =>{
    console.log('inside setting content action');
    return{
        type : ACTION_TYPES.SEARCH_CONTENT_SAGA,
        payload: payload
    }
}




export const setSearchTiming = (payload) =>{
    return{
        type : ACTION_TYPES.SEARCH_TIMING_SAGA,
        payload: payload
    }
}