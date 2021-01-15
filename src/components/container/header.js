
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = (props) =>{
    return(
        <Navbar >
                <Navbar.Brand >
                        MaNews
                    </Navbar.Brand>           

                    <Navbar.Toggle aria-controls='#header-collapse'>

                    </Navbar.Toggle>

                    <Navbar.Collapse id='header-collapse'>
                        <Nav>
                            <NavLink to='/' exact>
                                    Home
                            </NavLink>
                            <NavLink className='ml-2' to='/world' exact>
                                    World
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;