
import {useState} from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = (props) =>{

        const [expand,setExpanded] = useState(true);

    return(
        <Navbar expand={expand}>
                <Navbar.Brand >
                        MaNews
                    </Navbar.Brand>           

                    <Navbar.Toggle aria-controls='#header-collapse' 
                                    className="toggleButton"
                                    onClick={()=>{setExpanded((prev)=>{prev=!prev})}} 
                    />

                
                    <Navbar.Collapse id='header-collapse'>
                        <Nav>
                            <NavLink to='/' exact onClick={()=>{setExpanded(false)}}>
                                    Developing Stories
                            </NavLink>
                            <NavLink exact className='ml-2' to='/world' onClick={()=>{setExpanded(false)}}  >
                                    World
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;