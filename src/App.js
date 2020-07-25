import React from 'react';

import GlobalStyle from './Global';
import Theme from './Theme';

import Routes from './routes';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  );
}

export default App;
