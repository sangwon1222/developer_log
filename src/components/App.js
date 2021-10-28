/**eslint-disable */
import React from "react";
// component
import AppHeader from "./Header";
import PostStage from "./post/PostStage";
import LoginModal from "./LoginModal";
// css
import "../css/App.css";
import {BrowserRouter , Route, Switch } from 'react-router-dom';

function App() {
  // eslint-disable-line no-unused-vars
  return (
    <BrowserRouter>
    <div className="App">
      <AppHeader />
      <LoginModal />

      <Switch>

        {/* 메인 페이지 */}
        <Route exact path="/">
          <PostStage />
          <hr />
        </Route>

        {/* 회원가입 페이지 */}
        <Route path="/signup">
          signup
        </Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
