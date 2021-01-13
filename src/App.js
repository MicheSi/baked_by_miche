import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/navbar';
import Contact from './components/contact';
import OtherBakedGoods from './components/otherBakedGoods';
import Macarons from './components/macarons';
import Cookies from './components/cookies';

import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path='/contact' component={Contact}/>
        <Route path='/other_products' component={OtherBakedGoods}/>
        <Route path='/macarons' component={Macarons}/>
        <Route path='/cookies' component={Cookies}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
