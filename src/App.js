import React, { useState, useEffect } from 'react'
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
  const [blogs, setBlogs] = useState([])
  const [scrolled, setScrolled] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@admullan')
    .then(resp => resp.json())
    .then(blogs => setBlogs(blogs.items))

    return function clear() {window.removeEventListener('scroll', handleScroll)}
  }, [])

  const handleScroll = () => {
    if((window.innerHeight - window.scrollY) > window.innerHeight/5){
      setScrolled((window.innerHeight - window.scrollY))
    }
  }

  return (
    <div className="App">
      <Banner scrolled={scrolled}/>
      <Router>
        <div style={{position: 'fixed', top: scrolled, left: 0}}>
          <NavBar />
        </div>
        <div style={{paddingTop: window.innerHeight}}>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/about' exact component={() => <About />} />
          <Route path='/projects' exact component={() => <Projects />} />
          <Route path='/blogs' exact component={() => <Blogs blogs={blogs}/>} />
        </div>
      </Router>
      <Socials />
    </div>
  );
}

export default App;
