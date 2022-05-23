import { Route } from "react-router-dom";

/**
 * This is how you use nested Routes
 * You can define Route inside any component and you can define it anywhere you want
 * The route has to begin with the same route as its parent or else it won't work
 */
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
