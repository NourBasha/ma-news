import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import NewsCardBig from '../components/functional/newsCardBig';
import {API_KEY} from '../utils/data';

import {connect} from 'react-redux';

import Search from '../components/container/search';
import SearchCard from '../components/functional/searchCard';

import Context from '../utils/context';


let developingList = [];

const DevelopingNews = (props) =>{

  const context = useContext(Context);
  const [searchState, setSearchState] = useState(false);


  const [developingLoading, setDevelopingLoading] = useState(true);


  const getDevelopingNews = useCallback(()=>{

    setDevelopingLoading(true);

    console.log('getting data from API');

     axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`)
    .then((res)=>{
          if(res){
            developingList = [];
            developingList = res.data.results;
            setDevelopingLoading(false);
            setSearchState(false);
          }
    })
  
  },[])


  const getSearchNews = useCallback(()=>{

    console.log('getting data from SEARCH');


    setDevelopingLoading(true);

     axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${props.searchContent}&page=1&sort=${props.searchTiming}&api-key=${API_KEY}`)
    .then((res)=>{
          if(res){
            developingList= [];
            developingList = res.data.response.docs;
           

            setDevelopingLoading(false);
          }
    })
    .catch((err)=>{

    })
    .finally(()=>{

    })
  },[props.searchContent,props.searchTiming])



  useEffect(()=>{

    console.log('inside use effect')

  

    if(props.searchContent ){
      setSearchState(true);
      console.log('props has search content');
      return getSearchNews();
    }
  
      getDevelopingNews();
    

  },[getDevelopingNews,
     getSearchNews, 
     props.searchContent])


    return (
     <div className='developing-news-container'>
          <div className=' developing-news container-fluid  ' style={{paddingLeft:'2rem',paddingRight:'2rem'}}>
        
        <div className='row'>


          
        <div className='col-md-2 d-none d-md-inline-block pr-1 pl-0'  >
                     <div style={{backgroundColor:'#d8c5c36c', marginTop:'25px' ,padding:'10px 10px', borderRadius:'10px'}} >
                      <Search />
                    </div>        
        </div>

        <div className='col-md-10 d-inline'>



        {
            !developingLoading
            ? ( <div className='row d-flex justify-content-center mt-4'>     

                      { 
                         
                          !searchState 
                         ?
                            (   
                              developingList.map((story,index)=>{
                               if( index < 2 ){
                                return (
                                  <div className='col-12 col-md-6  d-flex align-items-stretch ' key={index}>
  
                                        <NewsCardBig newsList={story} />
                                </div>
                                )
  
                               } else return null ;
                              })
                            )
                         : (
                          developingList.map((story,index)=>{
                           
                             return (
                               <div className='col-12 col-md-6  d-flex align-items-stretch' key={index}>
                                     <SearchCard newsList={story} />
                             </div>
                             )

                           
                           })
                         )


                      }     
                     
                </div>
                )
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
                    ?

                        !searchState 
                          ?
                           (<div className='row d-felx justify-content-center'>
                        {
                        developingList.map((story,index)=>{
                          if(index > 1 ) {
                            return ( <div className='col-12 col-md-6 col-lg-4  d-flex align-items-stretch' key={index}>                    
                                          <NewsCardBig newsList={story} />
                                    </div>)
                                          } else return null
                                    })
                              }
                      </div>
                          )
                          : null


                      : null
                    }


               
      
          </div>

          <div className=' section  credit-row'>
            <div className='     text-center credit-col' >
                      <h3 className='appText'>Credit</h3>
                      <span className='logo'>
                      <span className='innerText ma'>Ma</span>
                      <span className='innerText manews'>News</span>
                      </span>
                      <p className='innerText'> Uses &nbsp;
                       <em  onClick={()=> window.location.href = 'https://www.nytimes.com/'} style={{ cursor:'pointer'}}>
                       New York Times
                         </em>
                         &nbsp;
                        API to Display Its Data</p>
            </div>
        </div>    

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