
import {put,takeEvery} from 'redux-saga/effects';
import {SEARCH_CONTENT, SEARCH_CONTENT_SAGA, SEARCH_TIMING, SEARCH_TIMING_SAGA} from '../actions/action_types';


function* sendSearchContent (action){

// work before send to reducer
    console.log('inside search content saga');

    yield put({type:SEARCH_CONTENT, payload: action.payload});
}


function* sendSearchTiming (action){

    // work before send to reducer
    
        yield put({type :SEARCH_TIMING, payload: action.payload});
    }



 
 function* watchSearchContent (){

    yield takeEvery(SEARCH_CONTENT_SAGA,sendSearchContent);
    yield takeEvery(SEARCH_TIMING_SAGA,sendSearchTiming);
}

export default watchSearchContent;