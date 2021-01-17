
import {useEffect, useState} from 'react';
import nyt from '../../assets/nyt.jpg';


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
        <div className="card mb-3">
            {
                props.newsList 
                ?  props.newsList.multimedia
                        ? <img className="card-img-top card-img" src={props.newsList.multimedia[0].url} alt=""/>
                        :<img className="card-img-top card-img" src={nyt} alt=""/>
                        
                : null
            }
          
            <div className="card-body">
                {
                    props.newsList 
                    ? (<div> 
                            <h5 className="card-title">{props.newsList.title}</h5>
                          { props.newsList.abstract ?<p className="card-text story-abstract">{props.newsList.abstract}</p>:null}
                            <hr/>
                            <p className="card-text">{props.newsList.byline}</p>
                            <p className="card-text updated-text appText"><small className="text-muted"> {updated} </small></p>
                        </div>)
                    :<p></p>

                }
            </div>
       </div>
    )
}

export default NewsCardBig;