
import {useState} from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const topics = [ "us","home", "politics", "health", "arts",  "sundayreview","automobiles", "books", "business", 
"fashion", "food",  "insider", "magazine", 
"movies", "obituaries", "opinion",  "science", "sports",
 "technology", "theater", "t-magazine", 
 "travel", "upshot"];

const Header = (props) =>{

        const [expand,setExpanded] = useState(false);
      

    return(
        <div className='header'>
             <Navbar  expand="lg" expanded={expand}>
                <Navbar.Brand >
                        MaNews
                    </Navbar.Brand>           

                  
                        <Nav className='mx-auto'>
                         
                           <NavLink to='/' exact 
                            className='d-inline-block'
                            onClick={()=>{setExpanded(false)}}>
                                    Developing Stories
                            </NavLink>
                         
                        
                        </Nav>

                        <Navbar.Toggle aria-controls='#header-collapse' 
                                    className=" toggleButton"
                                    aria-expanded="false"
                                    onClick={() => setExpanded((prevExpanded)=>(prevExpanded=!prevExpanded))}
                                   
                    />

                   
        </Navbar>

                {
                    expand?(
                        <div className='header-links container' >

                        <div className='row header-links-expand' style={{height:'100vh'}}>
                            <div className='col-6'>
                                <ul>
                                    {
                                        topics.map((topic,index)=>{
                                            if(index < (topics.length / 2)){
                                                return(
                                                    <li key={index}> {topic}</li>
                                                )
                                            }else return null   
                                        })
                                    } 
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    {
                                        topics.map((topic,index)=>{
                                            if(index > (topics.length / 2)){
                                                return(
                                                    <li key={index}> {topic}</li>
                                                )
                                            }else return null   
                                        })
                                        }
                                     
                                </ul>
                            </div>
                        </div>
                    
                    
                    
                    </div>
                    )
                        : null
                }
               
        </div>
       
    )
}

export default Header;