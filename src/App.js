import './App.css';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import NoDataFound from './Component/NodataFound/NoDataFound';
import Footer from './Component/Footer/Footer';
import Login from './Component/LogIn/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Details from './Component/Details/Details';
import SpecialCare from './Component/SpecialCare/SpecialCare';


function App() {
  return (
    <div>
      
    <AuthProvider>
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/specialCare">
            <SpecialCare></SpecialCare>
          </PrivateRoute>
          <PrivateRoute path="/details/:detailsId">
            <Details></Details>
          </PrivateRoute>
          <Route path="*">
            <NoDataFound></NoDataFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
      
      
    </div>
  );
}

export default App;
