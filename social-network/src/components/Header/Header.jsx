import React from "react"

import  style from"./Header.module.css"
import logo from "./logo.svg"


const Header = ()=> {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} />
    </header>
  );
}

export default Header;