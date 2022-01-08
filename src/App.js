import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Studio from './components/pages/Studio';
import Clients from './components/pages/Clients';
import './App.css';

function App() {
  return (
    <>

    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contacto' component={Contact}/>
        <Route path='/estudio' component={Studio}/>
        <Route path='/clientes' component={Clients}/> 
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
