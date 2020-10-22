import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/login/login.page';

function App() {
  return (
    <div>
      <Route exact path='/' component={LoginPage}/>
    </div>
  );
}

export default App;
