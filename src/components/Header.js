import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../rsc/logo.png";
import "../css/header.css";

function AppHeader() {
  const [showSearchInputFlag, controllSearchInput] = useState([false]);
  function showLoginModal() {
    document.getElementsByClassName("loginModal")[0].style.display = "block";
  }

  function showSearchInput() {
    const input = document.getElementsByClassName("App-search-input")[0];
    const flag = [...showSearchInputFlag];
    if (flag[0] === false) {
      input.style.display = "block";
      flag[0] = true;
    } else {
      input.style.display = "none";
      flag[0] = false;
    }
    controllSearchInput(flag);
  }

  return (
    <div className="App-header">
      <div className="App-header-wrap">
        <Link  className="App-logo" to="/">
          <img  src={logo} alt="logo" />
        </Link>

        <p className="App-search">
          <input
            type="text"
            className="App-search-input"
            placeholder="검색어를 입력하세요."
          />
          <span className="App-search-logo" onClick={() => showSearchInput()} />
        </p>
        <p className="App-login" onClick={() => showLoginModal()}>
          로그인
        </p>
      </div>
    </div>
  );
}

export default AppHeader;
