import { useState } from "react";
import {connect} from 'react-redux';
import {setSearchContent, setSearchTiming} from '../../store/actions/actions';


const Search = (props) => {
    const [query,setQuery] = useState('');
    const [optionTime,setOptionTime] = useState('newest');



    const handleSubmit = (e) =>{

        e.preventDefault();
        props.setContentTimingIntoState(optionTime); // newest oldest relevance
        props.setContentIntoState(query);           // search query 
        console.log('inside handle submit');
    } 

    return(
        <div className='search' style={{marginTop:'30px'}}>

            <form className='form-container' onSubmit={handleSubmit} >

                <div className='mb-3'>
                    <input
                     className='form-control'
                     type='text'
                     placeholder='Seach News' 
                     value={query}
                     onChange={(e) => {setQuery(e.target.value)}}
                     /> 
                </div>

                <div className='mb-3'>
                        <select className="form-control form-control-sm"
                         onChange={(e)=>{setOptionTime(e.target.value)}}
                         defaultValue={optionTime}
                         >
                               <option  value='newest'>Newest</option>
                               <option value='oldest'>Oldest</option>
                               <option value='relevance'>Most Relevant</option>     
                        </select>
                </div>

                    <button type='submit' className='btn btn-outline-light' > Search </button>
                
            </form>

                
        </div>
    )
} 


// const mapStateToProps = (state) =>{
//     return{
        
//     }
// }

const mapDispatchToProps = (dispatch) =>(
    {
        setContentTimingIntoState : (data) => { dispatch(setSearchTiming(data))}, 
        setContentIntoState : (data) => { dispatch(setSearchContent(data)) }
    }
)

export default  connect(null,mapDispatchToProps) (Search);