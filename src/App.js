import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/navbar';
import Contact from './components/contact';

import './App.css';



function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path='/contact' component={Contact}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
