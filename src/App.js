import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Studio from './components/pages/Studio';

function App() {
  return (
    <>

    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/estudio' component={Studio}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
