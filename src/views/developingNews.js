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
      <div className=' developing-news container '>
        {
          !developingLoading
          ?(

            <div className='row'>


                <div className='row d-flex justify-content-center'>
                
                                <div className='col-12 col-md-12 col-lg-4'>
                                      <NewsCardBig newsList={developingList[0]} />
                                </div>
                                 <div className='col-12 col-md-6 col-lg-4'>
                                     <div className='row'>
                                     <NewsCardBig newsList={developingList[1]} />
                                        </div>
                                     <div className='row'>
                                     <NewsCardBig newsList={developingList[2]} />
                                        </div>
                                </div>

              
                         </div>
                         <div className='col-12 col-md-'>
                                <div className='row'>
                                  <NewsCardBig newsList={developingList[3]} />

                                    </div>
                                <div className='row'>
                                  <NewsCardBig newsList={developingList[4]} />

                                    </div>
                                <div className='row'>
                                  <NewsCardBig newsList={developingList[5]} />
                                    </div>
                           </div>

                <div className='row d-flex justify-content-center'>
                          
                {
                  developingList.map((story,index)=>{
                    if(index > 5 && index < 8) {
                      return ( <div className='col-6' key={index}>                    
                                    <NewsCardBig newsList={story} />
                              </div>)
                        }else return null

                  })
                }
              

              {
                  developingList.map((story,index)=>{
                    if(index > 7 ) {
                      return ( <div className='col-4' key={index}>                    
                                    <NewsCardBig newsList={story} />
                              </div>)
                        } else return null
                  })
             }
                  </div>


              
               </div>
          
          )

          : <p> Loading ...</p>
        }
      </div>
    )
}

export  default DevelopingNews ; 