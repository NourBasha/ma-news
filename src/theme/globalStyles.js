
import {createGlobalStyle} from 'styled-components';


const GlobalStyles = createGlobalStyle`

body {
    background-color: ${({theme}) => theme.body};
    transition: 0.50s all linear 0.5s 
}

.appText {
    color: ${({theme})=> theme.text};
}

.innerText{
    color: ${({theme})=> theme.innerText};
}

button {
    background-color : ${({theme})=> theme.button };
}

.globalSection{
    background-color : ${({theme})=> theme.section };
} 

.section {
    background-color: ${({theme})=>theme.section}
}

`

export default GlobalStyles;