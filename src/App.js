import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Videos from './components/Videos';

function App() {
  return;
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Videos} />
      <Route />
      <Route />
    </Switch>
  </BrowserRouter>;
}

export default App;
