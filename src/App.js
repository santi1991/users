import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Provider as ReduxProvider } from 'react-redux';
import store from './utilities/store/store';
import { theme } from './utilities/theme/theme';
import AppContainer from './views/AppContainer';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </ReduxProvider >
  );
};

export default App;


{/* <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'          
        >
          Learn React
        </a>
      </header>
    </div> */}