import { Link } from 'react-router-dom'
import '../css/loginModal.css'

function LoginModal() {
    function closeModal() {
        document.getElementsByClassName('loginModal')[0].style.display = 'none'
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
                        className="loginInput"
                        placeholder="이메일을 입력하세요."
                    />
                    <button className="loginBtn"> 로그인 </button>
                </div>

                <div className="loginSubTitle">
                    <p>소셜 계정으로 로그인</p>
                    <button>git</button>
                    <button>google</button>
                </div>

                <div className="loginSubTitle">
                    <p>아직 회원이 아니신가요?</p>
                    <Link
                        to="/developerscode/signup"
                        // to="./signup"
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
