/**eslint-disable */
import React from 'react'
// component
import AppHeader from './Header'
import PostStage from './post/PostStage'
import LoginModal from './LoginModal'
import SignUp from './signup/SignUp'
import MyInfo from './myInfo/MyInfo'
// css
import '../css/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import prefix from '../utils/config'

function App() {
    function showInfo(flag) {
        console.log(flag)
    }
    // eslint-disable-line no-unused-vars
    return (
        <BrowserRouter>
            <div className="App">
                <AppHeader showInfoModal={(flag) => showInfo(flag)} />
                <LoginModal />

                <Switch>
                    {/* 메인 페이지 */}
                    {/* <Route exact path="/developerscode"> */}
                    <Route exact path="/">
                        {/* <Route exact path={prefix}> */}
                        <PostStage />
                        <hr />
                    </Route>

                    {/* 회원가입 페이지 */}
                    {/* <Route path="/developerscode/signup"> */}
                    <Route path="/signup">
                        <SignUp />
                    </Route>

                    <Route path="/myInfo">
                        <MyInfo />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
