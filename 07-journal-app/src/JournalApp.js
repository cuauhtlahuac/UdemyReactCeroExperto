import React from 'react';

import 'styles/styles.scss';  
import AppRouter from 'routers/AppRouter';

const JournalApp = () => {
  return (
    <div>
      <h1>Journal App</h1>
      <hr />
      <AppRouter />
    </div>  
  )
};

export default JournalApp;
