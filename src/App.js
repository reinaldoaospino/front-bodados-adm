import React from "react";
import LoginPage from "./pages/login/login.page";
import AdmPage from "./pages/adm/adm.page";
import PrivateRoute from "./hoc/private-route";
import PublicRoute from "./hoc/public-route";

import ProductsCreatePage from "./pages/products/create/products-create.page";
import ProductsAdministrarPage from "./pages/products/administrar/products-administrar.page";
import ProductsDeletePage from "./pages/products/delete/products-delete.page";
import CategoriesCreatePage from "./pages/categories/create/categories-create.page";
import CategoriesListPage from "./pages/categories/list/categories-list.page";
import EditarProductPage from "./pages/products/editar/editar.page";

function App() {
  return (
    <div>
      {/* Root */}
      <PrivateRoute component={AdmPage} exact path="/" />

      {/* Products */}
      <PrivateRoute component={ProductsCreatePage} path="/productos/crear" />
      <PrivateRoute
        component={ProductsAdministrarPage}
        path="/productos/administrar"
      />
      <PrivateRoute component={ProductsDeletePage} path="/productos/eliminar" />
      <PrivateRoute component={EditarProductPage} path="/productos/editar/:productId" />

      {/* Categories */}
      <PrivateRoute component={CategoriesCreatePage} path="/categorias/crear" />
      <PrivateRoute
        component={CategoriesListPage}
        path="/categorias/administrar"
      />

      {/* Login */}
      <PublicRoute component={LoginPage} exact path="/signin" />
    </div>
  );
}

export default App;
