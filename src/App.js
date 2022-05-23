import { Route } from "react-router-dom"; // this is a component that allows us to define a certain path and the react component that should be rendered when this path is active in the url

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Route path={"/welcome"}>
        <Welcome />
      </Route>
      <Route path={"/products"}>
        <Products />
      </Route>
    </div>
  );
}

export default App;
