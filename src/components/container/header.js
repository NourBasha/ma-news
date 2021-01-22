
import {useState} from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {setSearchContent, setSearchTiming} from '../../store/actions/actions';

let topics = [ "us", "politics", "health", "arts",  "sundayreview","automobiles", "books", "business", 
"fashion", "food",  "insider", "magazine", 
"movies", "obituaries", "opinion",  "science", "sports",
 "technology", "theater", "t-magazine", 
 "travel", "upshot"];

const Header = (props) =>{

        const [expand,setExpanded] = useState(false);
        const [menuLink,setMenuLink] = useState('');
        const [menuLinkIndex, setMenuLinkIndex] = useState(-1);
        const [groupNumber,setGroupNumber]= useState(0);
      

        const menuLinkClicked = (e)=>{

            setExpanded(false);
            setMenuLink(e.target.text);

            props.setSearchContentEmpty();
            props.setSearchContentTimingEmpty();


            topics = topics.filter((val,index)=>{
                if(e){
                    if( val === e.target.text.toLowerCase()){
                        setMenuLinkIndex(index);
                        console.log(index);
                    }
                }
                return val !== e.target.text.toLowerCase();
            })


            if(menuLinkIndex < (topics.length+1) /2 ){ // first ul group links 
                setGroupNumber(1);
                if (document.getElementsByClassName('menu-link')[0].text !== ''){
               
                    if(menuLinkIndex!== -1){
                     console.log('pushing inside >> ',menuLinkIndex);
                        topics.splice(menuLinkIndex,0,document.getElementsByClassName('menu-link')[0].text);
                    }
                }
    
                document.getElementsByClassName('menu-link')[0].text = e.target.text;   
                document.getElementsByClassName('menu-link')[0].style.displat = 'block';
            }else { // second ul group links
                setGroupNumber(2);
                if (document.getElementsByClassName('menu-link')[0].text !== ''){
               
                    if(menuLinkIndex!== -1){
                     console.log('pushing inside >> ',menuLinkIndex);
                        topics.splice(menuLinkIndex,0,document.getElementsByClassName('menu-link')[0].text);
                    }
                }
    
                document.getElementsByClassName('menu-link')[0].text = e.target.text;   
                document.getElementsByClassName('menu-link')[0].style.displat = 'block';
            }

          

        }
        
       
    return(
        <div className='header'>
             <Navbar  expand="lg" expanded={expand}>
                <Navbar.Brand >
                           <div className='logo' onClick={()=>{window.location.href = '/'}}>
                           <span className='ma'> Ma</span>
                             <span className='manews'>News</span>
                           </div>
                    </Navbar.Brand>           

                  
                        <Nav className='mx-lg-auto header-nav d-flex'>
                         
                           <NavLink to='/' exact 
                            className='d-inline-block appText link'
                            onClick={()=>{setExpanded(false)}}>
                                   Top Stories
                            </NavLink>
                         
                         
                            <NavLink   
                                     to={groupNumber ===1 ? {pathname:`/top-stories/${menuLink}`}:
                                      {pathname:`/topStories/${menuLink}`}} 
                                    className='d-inline-block menu-link link ml-3 appText'
                                   >
                            </NavLink>

                         
                        
                        </Nav>

                                <Navbar.Toggle aria-controls='#header-collapse' 
                                    className=" toggleButton d-block navbar-dark"
                                    aria-expanded="false"
                                    onClick={() => setExpanded((prevExpanded)=>(prevExpanded=!prevExpanded))}
                                   
                    />

                   
        </Navbar>

                {
                    expand?(
                        <div className='header-links container-fluid' >

                        <div className='row header-links-expand' style={{height:'100vh'}}>
                            <div className='col-md-6'>
                                <ul className=''>
                                    {
                                        topics.map((topic,index)=>{
                                            if(index < (topics.length / 2)){
                                                topic = topic.charAt(0).toUpperCase() + topic.slice(1);
                                                return(
                                                    
                                                 <li key={index}  >
                                                            <Link onClick={menuLinkClicked}
                                                            to={{pathname:`/top-stories/${topic}`}} >
                                                                   {topic}
                                                            </Link>
                                                   
                                                      </li>
                                                )
                                            }else return null   
                                        })
                                    } 
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <ul>
                                    {
                                        topics.map((topic,index)=>{
                                            if(index > (topics.length / 2)){
                                                topic = topic.charAt(0).toUpperCase() + topic.slice(1);
                                                return(
                                                    <li key={index} >
                                                    <Link 
                                                     onClick={menuLinkClicked}
                                                    to={{pathname:`/topStories/${topic}`}} >
                                                           {topic}
                                                    </Link>
                                           
                                              </li>
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


const mapDispatchToProps = (dispatch)=>{
    return{
        setSearchContentEmpty : () => {dispatch(setSearchContent(''))},
        setSearchContentTimingEmpty : () => {dispatch(setSearchTiming(''))}
    }
}

export default connect(null,mapDispatchToProps)(Header);