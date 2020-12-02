import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Create from './pages/Create/Create';
import Edit from './pages/Edit/Edit';
import Detail from './pages/Detail/Detail';
import Indexes from './pages/Index/Indexes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Indexes} path="/index" />
        <Route component={Create} path="/create" />
        <Route component={Edit} path="/edit/:id" />
        <Route component={Detail} path="/detail/:id" />
      </Switch>
    </div>
  );
}

export default App;
