import './App.css'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

// page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/about">About</NavLink>
        <NavLink exact to="/contact">Contact</NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/articles/:id">
          <Article/>
        </Route>
      </Switch>
      
    </BrowserRouter>
    </div>
  );
}

export default App
