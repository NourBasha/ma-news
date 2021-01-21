
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import NewsCardBig from '../components/functional/newsCardBig';
import {API_KEY} from '../utils/data';


let specificNewsList = [];

const FirstStylePage = (props)=>{
  
    
  const [newsLoading, setNewsLoading] = useState(true);

  const getSpecificNews = useCallback((name)=>{

    console.log('coming link  is :',name);

     axios.get(`https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${API_KEY}`)
    .then((res)=>{
          if(res){
            specificNewsList = [];
            specificNewsList = res.data.results;
            setNewsLoading(false);
          }
    })
    .catch((err)=>{
      console.log('err : ',err);
    })
    .finally(()=>{

    })
  },[])


  useEffect(()=>{


    if(props.target.match.params.name){
      console.log('link :',props.target.match.params.name);
        setNewsLoading(true);
        getSpecificNews(props.target.match.params.name);

    }else {

    }
    

  },[getSpecificNews, props.target.match.params.name])
  


    return (

        // change structure ~~ 

        <div className=' specific-topic-news container  '>
        
          {/*start of news row */}
       
            {

                !newsLoading
                ? ( <div className='row d-flex justify-content-center mt-4'>     

                          {
                            specificNewsList.map((story,index)=>{
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
               
              

                        {

                        !newsLoading 
                        ? (<div className='row d-felx justify-content-center'>
                            {
                            specificNewsList.map((story,index)=>{
                              if(index > 5 ) {
                                return ( <div className='col-12 col-md-6 col-lg-4  d-flex align-items-stretch' key={index}>                    
                                              <NewsCardBig newsList={story} />
                                        </div>)
                                              } else return null
                                        })
                                  }
                          </div>

                              )
                          :null
                        }
              
          
      </div>
    )
}
export default FirstStylePage ;