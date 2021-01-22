
import Skeleton from 'react-loading-skeleton';
import nyt from '../../assets/nyt.jpg';



const SearchCard = (props) =>{
   


    return( 

        
        <div className="card mb-3"  onClick={()=>{window.location.href = props.newsList.web_url }}>
            {props.newsList 
                ?
                (<div> 
                      
                      
                      {
                          props.newsList.multimedia[0]?  
                          <img className="card-img-top card-img" src={`https://www.nytimes.com/${props.newsList.multimedia[0].url}`} alt=""/>
                               :<img className="card-img-top card-img" src={nyt} alt=""/>

                        }

                     
                     
             
          
                     <div className="card-body">
                         {
                              <div> 
                                     { props.newsList.headline?<h6 className="card-title">{props.newsList.headline.main}</h6>:null }
                                   { props.newsList.abstract ?<p className="card-text story-abstract">{props.newsList.abstract}</p>:null}
                                     
                                     <hr/>

                                     {  props.newsList.byline.original? <p className="card-text">{props.newsList.byline.original}</p> : null}
                                     
                                     {
                                         props.newsList.pub_date ? (  <p className="card-text updated-text appText">
                                         <small className="text-muted"> {props.newsList.pub_date.slice(0,10)}
                                          </small>
                                         </p>) : null
                                     }
                                   

                                 </div> 
                            
         
                         }
                     </div>
                </div>)
                
               
                                    
                                    : <Skeleton count={5} duration={4}/>
                                }
       </div>
    )
}

export default SearchCard;