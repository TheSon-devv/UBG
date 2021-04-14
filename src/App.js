import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";


const App = (props) => {
  // localStorage.setItem('token', 'asd')
  // const PrivateRouter = ({ component: Component, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       localStorage.getItem('con')
  //         ? (<Component {...props} />)
  //         : (<Redirect to="/signIn"/>)
  //     }
  //   />
  // )
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        {/* <PrivateRouter path="/" component={Home} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
