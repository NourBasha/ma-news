import {all, fork} from 'redux-saga/effects';
import searchContent from './search_saga';
 
function* rootSaga (){
    yield all([
        fork(searchContent)
    ])
}


export default rootSaga;