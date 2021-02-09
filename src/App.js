import './Reset.css'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Banner from './Components/Banner'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Socials from './Components/Socials'
import About from './Components/About'
import Projects from './Components/Projects'
import Blogs from './Components/Blogs'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <NavBar />
        <Route path='/' exact component={() => <Home />} />
        <Route path='/about' exact component={() => <About />} />
        <Route path='/projects' exact component={() => <Projects />} />
        <Route path='/blogs' exact component={() => <Blogs />} />
      </Router>
      <Socials />
    </div>
  );
}

export default App;
