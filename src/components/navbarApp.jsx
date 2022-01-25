import React from 'react';
import '../CSS/navBar.css';
import { NavLink } from 'react-router-dom';
import '../pages/routingAppPages';
import { useSelector, useDispatch } from 'react-redux';
import { postUser, setValuesByKey } from '../redux/user';
import * as Icon from 'react-bootstrap-icons';
function logOut(dispatch) {
  let text = 'אתה בטוח שאתה רוצה להתנתק';
  if (window.confirm(text) === true)
    dispatch(setValuesByKey({ key: 'firstName', value: '' }));
}
const NavbarApp = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user.obj !== undefined ? user : '', 'ggg');
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {user.obj.firstName === '' ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/CreateUser">
                    יצירת משתמש&nbsp;
                    <Icon.PersonLinesFill />
                  </NavLink>
                </li>
                <br />
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
                onClick={() => logOut(dispatch)}
                to="/"
              >
                יציאה
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
                  ({4})הזמנות&nbsp;
                  <Icon.InboxesFill />
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

export default NavbarApp;
