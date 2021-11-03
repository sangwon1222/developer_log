import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../rsc/logo.png'
// css
import '../css/header.scss'
// gsap
import gsap from 'gsap'

function AppHeader() {
    const [showSearchInputFlag, controllSearchInput] = useState([false])

    function showLoginModal() {
        document.getElementsByClassName('loginModal')[0].style.display = 'block'
    }

    function showSearchInput() {
        const inputWrap =
            document.getElementsByClassName('search_input_wrap')[0]
        const input = document.getElementById('search_input')
        const flag = [...showSearchInputFlag]

        if (flag[0] === false) {
            gsap.to(inputWrap, { height: 'auto', duration: 0.25 })
            inputWrap.style.padding = '1rem 0'
            flag[0] = true
            input.focus()
        } else {
            gsap.to(inputWrap, { height: '0px', duration: 0.25 })
            inputWrap.style.padding = '0'
            flag[0] = false
        }
        input.value = ''
        controllSearchInput(flag)
    }

    function clickSearch() {
        alert(`검색 기능 준비중입니다.`)
        showSearchInput()
    }

    return (
        <div className="App-header">
            <div className="search_input_wrap">
                <input
                    id="search_input"
                    type="text"
                    placeholder="검색어를 입력하세요."
                />
                <button
                    className="search_btn"
                    onClick={() => {
                        clickSearch()
                    }}
                >
                    검색
                </button>
            </div>

            <div className="App-header-wrap">
                {/* <Link className="App-logo" to="/developerscode"> */}
                <Link className="App-logo" to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <div className="App-search">
                    <span
                        className="App-search-logo"
                        onClick={() => showSearchInput()}
                    />
                </div>

                <div className="App-login" onClick={() => showLoginModal()}>
                    로그인
                </div>

                <div className="App-info">
                    <Link className="info_icon" to="/myInfo">
                        INFO
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AppHeader
