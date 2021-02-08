import React from "react";
import "./Header.css";
import { FiMenu } from "react-icons/fi";
import logo from "./logo.png";
import { CgShoppingCart } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const productDetails = useSelector((state) => state.CartReducer);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__first">
          <FiMenu fontSize="xx-large" className="menu" />
          <Link to="/">
            <div className="header__image">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>
        <div className="header__second">
          <input type="text" />
          <GoSearch className="search__icon" fontSize="large" />
        </div>
        <div className="header__third">
          <div className="account">
            <span className="name">Hello Suraj</span>
            <span className="title">Account & List</span>
          </div>
          <div className="return">
            <span className="name">Returns</span>
            <span className="title">& Orders</span>
          </div>
          <div className="prime">
            <div className="container">
              <span className="name">Try</span>
              <span className="title">Prime</span>
            </div>
            <IoMdArrowDropdown />
          </div>
          <Link to="/cart">
            <div className="cart">
              <CgShoppingCart fontSize="xx-large" />
              <span className="title">Cart</span>
              {productDetails.productCount ? (
                <span className="item">{productDetails.productCount}</span>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
