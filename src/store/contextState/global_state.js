
import { useState, useEffect } from 'react';
import Context from '../../utils/context';

const GlobalState = (props)=>{

    const [theme, setTheme] = useState('light');

    const themeToggler =() =>{
        theme === 'light' ?setMode('dark') :setMode('light');
    }

    const setMode = (mode) =>{ // send theme to local storage
        window.localStorage.setItem('theme',mode);
        setTheme(mode);
    }

    useEffect(()=>{

      const storageTheme =  window.localStorage.getItem('theme');

      if(storageTheme){ // if theme in local storage, get it and set it
          setTheme(storageTheme);
      }else { // not, send default
          setMode('light')
      }


    },[])


    return(

        <Context.Provider value={{
            theme : theme,
            toggleTheme : ()=> themeToggler()

        }}>
            {props.children}
        </Context.Provider>
    )
}
export default GlobalState;