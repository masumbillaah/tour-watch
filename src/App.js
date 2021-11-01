import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddService from "./Pages/AddService/AddService";
import MangeServices from "./Pages/MagnegeService/MangeServices";
import Footer from "./Pages/Footer/Footer";
import MyOrder from "./Pages/MyOrder/MyOrder";
import About from "./Pages/About Us/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/mange">
              <MangeServices></MangeServices>
            </PrivateRoute>
            <PrivateRoute path="/order/:id">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
          <Footer>

          </Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
