
import styled from 'styled-components';

const Component = styled.a`

cursor: pointer ;

`


const Toggler = ({toggleTheme}) =>{

    

    return(

        <Component onClick={()=>{  toggleTheme() }}>

        click me to switch theme
        </Component>

    )
}

export default Toggler;