import './Reset.css'
import './App.css'
import Banner from './Components/Banner'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <NavBar />
        <Route path='/' exact component={() => <Home />} />
      </Router>
    </div>
  );
}

export default App;
