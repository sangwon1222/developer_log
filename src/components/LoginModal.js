import axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/loginModal.css'

function LoginModal() {
    function closeModal() {
        document.getElementsByClassName('loginModal')[0].style.display = 'none'
    }
    async function login() {
        const id = document.getElementById('login_id_input')
        const pw = document.getElementById('login_pw_input')

        try {
            await axios({
                method: 'post',
                url: '/api/auth/login',
                data: {
                    username: id.value,
                    password: pw.value,
                },
            })
        } catch (e) {
            console.error(e)
            console.log(`%c error`, 'border:2px red solid;')
            alert(`id, 비밀번호를 확인해주세요.`)
        }
        console.log(`login`)
    }
    return (
        <div className="loginModal">
            <div className="login-wrap">
                <button className="close" onClick={() => closeModal()} />

                <div className="loginTitle">
                    <span>로그인</span>
                    <span>이메일로 로그인</span>
                </div>

                <div>
                    <input
                        id="login_id_input"
                        className="loginInput"
                        placeholder="아이디를 입력하세요."
                    />
                    <input
                        id="login_pw_input"
                        className="loginInput"
                        placeholder="비밀번호를 입력하세요."
                    />
                    <button className="loginBtn" onClick={() => login()}>
                        로그인
                    </button>
                </div>

                <div className="loginSubTitle">
                    <p>소셜 계정으로 로그인</p>
                    <button>git</button>
                    <button>google</button>
                </div>

                <div className="loginSubTitle">
                    <p>아직 회원이 아니신가요?</p>
                    <Link
                        // to="/developerscode/signup"
                        to="/signup"
                        onClick={() => closeModal()}
                    >
                        회원가입
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
