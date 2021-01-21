
import {useEffect, useState} from 'react';
// import nyt from '../../assets/nyt.jpg';
import Skeleton from 'react-loading-skeleton';

// import { useHistory } from 'react-router';


const NewsCardBig = (props) =>{
    const [updated, setUpdatedAt] = useState('');

    const updatedAt= ()=>{
       if(props.newsList){
          if(props.newsList.updated_date){
           
            let diff = (new Date(new Date().toISOString().slice(0,19))) - (new Date(props.newsList.updated_date.slice(0,19)));
          
             let   mins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes
           
             let hrs = Math.floor((diff % 86400000) / 3600000); // hours
         
             let days = Math.floor(diff / 86400000); // days
         
             if (days !== 0){

                    if(hrs !== 0 ){
                        if(days === 1) {
                            setUpdatedAt(`last updated ${days} day, ${hrs} hours, ${mins} minutes ago`);

                        }else {
                            setUpdatedAt(`last updated ${days} days, ${hrs} hours, ${mins} minutes ago`);
                        }
                    }else{
                        if(days === 1) {
                            setUpdatedAt(`last updated ${days} day, ${hrs} hours, ${mins} minutes ago`);

                        }else {
                            setUpdatedAt(`last updated ${days} days, ${hrs} hours, ${mins} minutes ago`);
                        }
                    }

             }else{

                if(hrs !== 0 ){
                    setUpdatedAt(`last updated ${hrs} hours, ${mins} minutes ago`);
                }else{
                    setUpdatedAt(`last updated ${mins} minutes ago`)
                }
  

             }
          }
       }
    }
    

    useEffect(()=>{
        updatedAt();
    })


    return( 

        
        <div className="card mb-3"  onClick={()=>{window.location.href = props.newsList.url }}>
            {props.newsList 
                ?
                (<div> 
                      
                      
                      {
                          props.newsList.multimedia?  
                          <img className="card-img-top card-img" src={props.newsList.multimedia[0].url} alt=""/>
                        :<Skeleton />
                        }

                     
                     
             
          
                     <div className="card-body">
                         {
                              <div> 
                                     <h5 className="card-title">{props.newsList.title}</h5> 
                                   { props.newsList.abstract ?<p className="card-text story-abstract">{props.newsList.abstract}</p>:null}
                                     <hr/>
                                     <p className="card-text">{props.newsList.byline}</p>
                                     <p className="card-text updated-text appText"><small className="text-muted"> {updated} </small></p>
                                 </div> 
                            
         
                         }
                     </div>
                </div>)
                
               
                                    
                                    : <Skeleton count={5} duration={4}/>
                                }
       </div>
    )
}

export default NewsCardBig;