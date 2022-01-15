import React from 'react';
import '../CSS/navBar.css';
import { Link, NavLink } from 'react-router-dom';
import '../pages/routing';
import { useSelector } from 'react-redux';
import { setValuesByKey } from '../redux/user';
import * as Icon from 'react-bootstrap-icons';
import LogOut from './logout';
function logOut(props) {
  let text = 'אתה בטוח שאתה רוצה להתנתק';
  if (window.confirm(text) === true)
    props.dispatch(setValuesByKey({ key: 'name', value: '' }));
}

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.user.name === '' ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/CreateUser">
                    יצירת משתמש&nbsp;
                    <Icon.PersonLinesFill />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    כניסה לחשבון&nbsp;
                    <Icon.PersonLinesFill />
                  </NavLink>
                </li>
              </ul>
            ) : (
              <NavLink
                className="nav-link"
                onClick={() => logOut(props)}
                to="/"
              >
                יציאה&nbsp;
                <Icon.DoorOpenFill />
              </NavLink>
            )}
          </div>
          <div className="userAccount">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/UserPage">
                  עמוד משתמש&nbsp;
                  <Icon.PersonCircle />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Cart">
                  ({})עגלה&nbsp;
                  <Icon.Cart />
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/Menu">
                  תפריט&nbsp;
                  <Icon.BookHalf />
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/">
                  בית&nbsp;
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

export default Navbar;
