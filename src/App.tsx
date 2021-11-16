//React router 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Componentes das páginas
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Todos from './pages/Todos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastre" component={SignIn} />
        <Route render={() => <h1>Página Não Encontrada</h1>} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
