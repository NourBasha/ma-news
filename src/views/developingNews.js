import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import NewsCardBig from '../components/functional/newsCardBig';
import {API_KEY} from '../utils/data';

import {connect} from 'react-redux';

import Search from '../components/container/search';


let developingList = [];

const DevelopingNews = (props) =>{


  const [developingLoading, setDevelopingLoading] = useState(true);


  const getDevelopingNews = useCallback(()=>{

     axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`)
    .then((res)=>{
          if(res){
            developingList = res.data.results;
            console.log(developingList);
            setDevelopingLoading(false);
          }
    })
    .catch((err)=>{

    })
    .finally(()=>{

    })
  },[])


  const getSearchNews = useCallback(()=>{
   
     axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${props.searchContent}&page=1&&sort=${props.searchTiming}&api-key=${API_KEY}`)
    .then((res)=>{
          if(res){
            developingList= [];
            developingList = res.data.results;
            console.log(res.data.response.docs);
            // we are here 
          //  setDevelopingLoading(false);
          }
    })
    .catch((err)=>{

    })
    .finally(()=>{

    })
  },[props.searchContent,props.searchTiming])


  useEffect(()=>{

    console.log('inside use effect')

    if(props.searchContent !== ''){
      console.log('inside if');
      setDevelopingLoading(true);
      getSearchNews();

    }else {
      console.log('inside else');
      setDevelopingLoading(true);
      getDevelopingNews();
    }

  },[getDevelopingNews,
     getSearchNews, 
     props])


    return (
      <div className=' developing-news container-fluid  ' style={{paddingLeft:'2rem',paddingRight:'2rem'}}>
        
        <button onClick={()=>{console.log(props.searchContent)}}> search content </button>

            <div className='row'>

              
            <div className='col-md-2 d-none d-md-inline-block' style={{backgroundColor:'#d8c5c36c', marginTop:'20px' , borderRadius:'10px'}} >
                      <div >
                          <Search />
                        </div>        
            </div>

            <div className='col-md-10 d-inline'>



            {
                !developingLoading
                ? ( <div className='row d-flex justify-content-center mt-4'>     

                          {
                            developingList.map((story,index)=>{
                             if( index < 6 ){
                              return (
                                <div className='col-12 col-md-6  d-flex align-items-stretch ' key={index}>
                                      <NewsCardBig newsList={story} />
                              </div>
                              )

                             } else return null ;
                            })
                          }     
                         
                    </div>)
                : ( <div className="text-center row d-flex justify-content-center " style={{marginTop:'100px'}}>
                        <div className="spinner-grow  text-danger m-5 "
                      style={{width:'5rem', height:'5rem'}} role="status">
                        </div>
                     </div>)
            }
               
                      
              
            </div>
        


            </div>


            {
                        !developingLoading 
                        ? (<div className='row d-felx justify-content-center'>
                            {
                            developingList.map((story,index)=>{
                              if(index > 5 ) {
                                return ( <div className='col-12 col-md-6 col-lg-4  d-flex align-items-stretch' key={index}>                    
                                              <NewsCardBig newsList={story} />
                                        </div>)
                                              } else return null
                                        })
                                  }
                          </div>
                              )
                          : null
                        }
          
      </div>


    )
}


const mapStateToProps = (state) =>(
  {
    searchContent : state.search_reducer.search_query,
    searchTiming : state.search_reducer.search_timing

  }
)

export  default connect(mapStateToProps) (DevelopingNews) ; 