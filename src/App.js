import Routes from './router/routes';

import {ThemeProvider} from 'styled-components';
import GlobalStyles from './theme/globalStyles';
import {lightTheme,darkTheme}from './theme/theme';

import { useContext } from 'react';

import Context from './utils/context';

function App() {

  const context = useContext(Context);

  return (
    <div className="App" >
      <ThemeProvider theme={context.theme ==='light'? lightTheme : darkTheme }>
          <>
              <GlobalStyles/>
              <Routes />
          </>
      </ThemeProvider>
    </div>
  );
}

export default App;
