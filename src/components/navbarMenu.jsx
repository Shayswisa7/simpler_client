import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages/routingAppPages';

import * as Icon from 'react-bootstrap-icons';

const NavbarMenu = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu/createOrder">
                  צור מנה&nbsp;
                  <Icon.PersonCircle />
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/menu/saveOrder">
                  המנות שלך&nbsp;
                  <Icon.BookHalf />
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/menu/business">
                  מנות הבית&nbsp;
                  <Icon.HouseDoorFill />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarMenu;
