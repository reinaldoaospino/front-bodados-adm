import React from "react";
import LoginPage from "./pages/login/login.page";
import AdmPage from "./pages/adm/adm.page";
import PrivateRoute from "./hoc/private-route";
import PublicRoute from "./hoc/public-route";

import ProductsCreatePage from "./pages/products/create/products-create.page";
import ProductsUpdatePage from "./pages/products/update/products-update.page";
import ProductsDeletePage from "./pages/products/delete/products-delete.page";
import CategoriesCreatePage from "./pages/categories/create/categories-create.page";
import CategoriesListPage from "./pages/categories/list/categories-list.component";

function App() {
  return (
    <div>
      <PrivateRoute component={AdmPage} exact path="/" />
      <PrivateRoute component={ProductsCreatePage} path="/productos/crear" />
      <PrivateRoute
        component={ProductsUpdatePage}
        path="/productos/administrar"
      />
      <PrivateRoute component={ProductsDeletePage} path="/productos/eliminar" />
      <PrivateRoute component={CategoriesCreatePage} path="/categorias/crear" />
      <PrivateRoute
        component={CategoriesListPage}
        path="/categorias/administrar"
      />
      <PublicRoute component={LoginPage} exact path="/signin" />
    </div>
  );
}

export default App;
