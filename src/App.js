import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/schedule' component={Schedule} />
      <Route path='/contact' component={Contact} />
    </div>
    </BrowserRouter>
  );
}


export default App;
