// Exercise 2: Nested Routes
// TODO: Create nested routes within the `About` page, such as `/about/team` and `/about/contact`.
const About = () => (
  <div>
    <h2>About</h2>
    <Route path="/about/team" component={Team} />
    <Route path="/about/contact" component={Contact} />
  </div>
);

// Exercise 3: Redirects
// TODO: Set up a redirect from `/old-home` to `/`.
const OldHome = () => <Redirect to="/" />;

// Exercise 4: Route Parameters
// TODO: Create a `UserProfile` route that takes a `userId` parameter and displays user-specific information.
const UserProfile = ({ match }) => (
  <div>
    <h2>User Profile: {match.params.userId}</h2>
  </div>
);

// Exercise 5: Protected Routes
// TODO: Implement a protected route that only allows access if the user is authenticated. Otherwise, redirect to a login page.
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Authenticated ? <Component {...props} /> : <Redirect to="/login" />
  )} />
);

// Exercise 6: Navigation Bar with Active Links
// TODO: Create a navigation bar where the active link is styled differently using React Router's `NavLink`.
const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

