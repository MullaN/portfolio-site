import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

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
        <NavLink to="/" exact activeStyle={active}>Home</NavLink>
        <NavLink to="/about" exact activeStyle={active}>About</NavLink>
        <NavLink to="/blogs" exact activeStyle={active}>Blogs</NavLink>
        <NavLink to="/projects" exact activeStyle={active}>Projects</NavLink>
      </div>
    )
  }
}
 
export default withRouter(Navbar);