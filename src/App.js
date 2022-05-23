import { Route, Switch } from "react-router-dom"; // this is a component that allows us to define a certain path and the react component that should be rendered when this path is active in the url

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

/**
 * You have to register every route here before using it
 * The react router works in a way that once it sees a match for the requested route, only the first part of the route, it then hits that route immediately
 * So if no switch component was used a /products and a /products/productId routes will be rendered together
 * The Solution for not rendering both together is the Switch component
 * But we still have the problem of when hitting on /products/productId it will hit the /products route because it is registered before the other one
 * Two Solutions for that:
 *    fisrt one is to switch orders
 *    second one is to use the exact prop on the /products route
 */
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
