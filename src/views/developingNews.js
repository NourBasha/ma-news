import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import NewsCardBig from '../components/functional/newsCardBig';
import {API_KEY} from '../utils/data';





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


  useEffect(()=>{

    getDevelopingNews();

  },[getDevelopingNews])


    return (
      <div className=' developing-news container  '>
        
          {/*start of news row */}
       
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
                : <p>Loading ... </p>
            }
               
              

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
                          : <p>Loadign ... </p>
                        }
              
          
      </div>
    )
}

export  default DevelopingNews ; 