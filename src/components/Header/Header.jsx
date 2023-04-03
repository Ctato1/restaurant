import React, { useRef, useEffect, useState } from "react";
import { Container } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import useAuth from "../../custom-hooks/useAuth";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import "./header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  // {
  //   display: "Contact",
  //   path: "/contact",
  // },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);
  const navigate = useNavigate();

  const [changeProfile, setChangeProfile] = useState(false);

  const { currentUser } = useAuth();

  const dispatch = useDispatch();

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };


  const toggleProfile = () => {
      profileActionRef.current.classList.toggle("show__profileActions");
   
  };

  const headerStick = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
  };

  useEffect(() => {
    headerStick();
    return () => window.removeEventListener("scroll", headerStick);
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Bonanza</h5>
          </div>

          {/* menu */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.display}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* nav right */}

          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <i class="ri-user-line" onClick={toggleProfile}></i>
            </span>
            <div className="profile">
              <div
                className="profile__actions"
                ref={profileActionRef}
                onClick={toggleProfile}
              >
                {currentUser ? (
                  <span onClick={logout}>Log out</span>
                ) : (
                  <div>
                    <Link to="/register">Sign up</Link>
                    <br />
                    <Link to="/login">Login</Link>
                  </div>
                )}
              </div>
            </div>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
