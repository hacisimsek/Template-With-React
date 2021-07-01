import './App.css';
import  Navbar  from "./components/Navbar.jsx";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './components/pages/Home.jsx'
import Product from './components/pages/Product';
import SingUp from './components/pages/SingUp';
import Services from './components/pages/Services';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/sing-up" component={SingUp} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
