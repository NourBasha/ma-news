
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import NewsCardBig from '../components/functional/newsCardBig';
import {API_KEY} from '../utils/data';


let specificNewsList = [];

const SecondStylePage = (props)=>{
  
    
  const [newsLoading, setNewsLoading] = useState(true);

  const getSpecificNews = useCallback((name)=>{

    console.log('inside use callback');
    console.log('inside name : '+name);


     axios.get(`https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${API_KEY}`)
    .then((res)=>{
          if(res){
            specificNewsList = [];
            specificNewsList = res.data.results;
            setNewsLoading(false);
          }
    })
    .catch((err)=>{

    })
    .finally(()=>{

    })
  },[])


  useEffect(()=>{

    console.log('inside use effect');

    if(props.target.match.params.name){
        console.log('inside use effect if');
        setNewsLoading(true);
        getSpecificNews(props.target.match.params.name);

    }else {
        console.log('inside use effect else ');

    }
    

  },[getSpecificNews, props.target.match.params.name])
  


    return (

        // change structure ~~ 

        <div className=' specific-topic-news-2 container  '>
        
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
                : <p>Loading ... </p>
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
                          : <p>Loadign ... </p>
                        }
              
          
      </div>
    )
}
export default SecondStylePage ;