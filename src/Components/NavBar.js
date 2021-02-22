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

const active = { 
  background: 'white', 
  color: 'black', 
  borderBottomLeftRadius: '5px', 
  borderBottomRightRadius: '5px' 
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div className={"navBar"}>
        <NavLink to="/" exact style={link} activeStyle={active}>Home</NavLink>
        <NavLink to="/about" exact style={link} activeStyle={active}>About</NavLink>
        <NavLink to="/blogs" exact style={link} activeStyle={active}>Blogs</NavLink>
        <NavLink to="/projects" exact style={link} activeStyle={active}>Projects</NavLink>
      </div>
    )
  }
}
 
export default withRouter(Navbar);