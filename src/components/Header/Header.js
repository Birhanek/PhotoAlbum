import React from "react";
import PropTypes from "prop-types";
import style from "./header.module.css";
const Header = props => {
  const {header}=props;
  return (<div className={style.title}>{header}</div>);  
};

Header.prototype ={
  header:PropTypes.string,
};
export default Header;
