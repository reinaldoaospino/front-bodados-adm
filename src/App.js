import React from 'react';
import LoginPage from './pages/login/login.page';
import AdmPage from './pages/adm/adm.page';
import PrivateRoute from './hoc/private-route';
import PublicRoute from './hoc/public-route';
import { AppContainer } from './App.styles';
import ProductsCreatePage from './pages/products-create/products-create.page'

function App() {
  return (
    <AppContainer>
      <PrivateRoute component={AdmPage} exact path='/' />
      <PrivateRoute component={ProductsCreatePage} path='/productos/crear' />
      <PublicRoute component={LoginPage} exact path='/signin' />
    </AppContainer>
  );
}

export default App;
