import React from 'react';
import ReactDOM from 'react-dom';
import {Nav,Navbar,NavItem} from 'react-bootstrap'; 
 
export default class NavBar extends React.Component{
    render() {
        return navbarInstance;
   } 
}

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a id="brand" href="#banner"  className="smoothScroll">
            <img src="../images/m.jpg" alt="m"/>
            <div id="markus">Markus</div> <div id="moilanen">Moilanen</div>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#about"><div>About Me</div></NavItem>
        <NavItem eventKey={2} href="#skills"><div>Skills</div></NavItem>
        <NavItem eventKey={3} href="#projects"><div>Projects</div></NavItem>
        <NavItem eventKey={4} href="#contact"><div>Contact</div></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

/*const navbarInstance = (
    <div id="nav-container">
        <nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="800">
            <div class="navbar-inner container">
                <ul class="nav navbar-nav navbar-right">
                    <li><a id="brand" href="#banner"  class="smoothScroll">
                        <img src="../images/m.jpg" alt="m"/>
                        <div id="markus">Markus</div> <div id="moilanen">Moilanen</div></a>
                    </li>
                    <li class="link"><a href="#nav-container" class="smoothScroll"><div>About Me</div></a></li>
                    <li class="link"><a  href="#portfolio" class="smoothScroll"><div>Skills</div></a></li>
                    <li class="link"><a href="#footer" class="smoothScroll"><div>Contact</div></a></li>
                </ul>
            </div>
        </nav>
    </div>
);*/