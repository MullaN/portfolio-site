import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
 
const link = {
  height: '100%',
  padding: '0 1vw',
  textDecoration: 'none',
  color: 'white',
  float: 'left',
  fontSize: '1vw',
  alightItems: 'center'
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div className={"navBar"}>
        <NavLink to="/" exact style={link} activeStyle={{ background: 'white', color: 'black' }}>Home</NavLink>
        <NavLink to="/about" exact style={link} activeStyle={{ background: 'white', color: 'black' }}>About</NavLink>
        <NavLink to="/blog" exact style={link} activeStyle={{ background: 'white', color: 'black' }}>Blog</NavLink>
        <NavLink to="/projects" exact style={link} activeStyle={{ background: 'white', color: 'black' }}>Projects</NavLink>
      </div>
    )
  }
}
 
export default withRouter(Navbar);