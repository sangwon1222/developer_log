import axios from 'axios'
import '../../css/signup/SignUp.scss'
import { validateEmail } from '../../utils'

function SignUp() {
    let duplicationFlag = false

    function enterEvent() {
        document.addEventListener('keyup', (e) => {
            if (e.code === 'Enter') {
                submit()
            }
        })
    }
    enterEvent()

    function checkId() {
        const id = document.getElementById('signup_id_input')
        const pw = document.getElementById('signup_pw_input')
        if (id.value === '') {
            alert(`ID를 작성해주세요.`)
            id.focus()
        } else {
            duplicationFlag = true
            alert(`중복되지 않은 ID 입니다. 계속 진행해주세요.`)
            pw.focus()
        }
    }

    async function submit() {
        const name = document.getElementById('signup_name_input')
        const id = document.getElementById('signup_id_input')
        const pw = document.getElementById('signup_pw_input')
        const email = document.getElementById('signup_email_input')
        const tel = document.getElementById('signup_tel_input')
        if (id.value === '') {
            alert('아이디를 작성하세요.')
            id.focus()
            return
        }
        if (name.value === '') {
            alert('이름을 작성하세요.')
            name.focus()
            return
        }
        if (pw.value === '') {
            alert('비밀번호를 작성하세요.')
            pw.focus()
            return
        }
        if (email.value === '' || !validateEmail(email.value)) {
            alert('올바른 이메일 주소를 입력하세요')
            email.focus()
            return false
        }
        if (tel.value === '') {
            alert('전화번호를 작성하세요.')
            tel.focus()
            return
        }
        if (!duplicationFlag) {
            alert('아이디 중복확인을 클릭하세요.')
            return
        }

        await axios({
            method: 'post',
            url: '/api/user',
            data: {
                username: id.value,
                email: email.value,
                password: pw.value,
                firstName: name.value,
                lastName: name.value,
                telNo: tel.value,
                thumbFileId: null,
            },
        })

        alert('회원가입 완료!')
        console.log(
            `이름: ${name.value} ,아이디:  ${id.value} , 비밀번호: ${pw.value}`
        )

        window.location.href = 'https://hkbvc1222.cafe24.com/developerscode'
    }

    return (
        <div className="sign_up_page">
            {/* username	true	사용자 ID
                password	true	사용자 비밀번호
                email	true	사용자 E-mail
                lastName	false	성
                firstName	false	이름
                telNo	false	사용자 전화번호
                thumbFile */}
            <div className="id_wrap sign_up_input_wrap">
                <label htmlFor="signup_id_input">아이디: </label>
                <input
                    className="signup_input"
                    id="signup_id_input"
                    name="user_id"
                    type="text"
                    placeholder="아이디를 작성해주세요."
                />
            </div>
            <div className="id_duplicate_wrap sign_up_input_wrap">
                <div className="id_duplicate" onClick={() => checkId()}>
                    아이디 확인
                </div>
            </div>
            <div className="name_wrap sign_up_input_wrap">
                <label htmlFor="signup_name_input">이름: </label>
                <input
                    className="signup_input"
                    id="signup_name_input"
                    name="user_name"
                    type="text"
                    placeholder="이름을 작성해주세요."
                />
            </div>
            <div className="pw_wrap sign_up_input_wrap">
                <label htmlFor="pw_input">비밀번호: </label>
                <input
                    className="signup_input"
                    id="signup_pw_input"
                    name="user_pw"
                    type="password"
                    maxLength="14"
                    placeholder="14자리 비밀번호 작성해주세요."
                />
            </div>

            <div className="email_wrap sign_up_input_wrap">
                <label htmlFor="signup_email_input">이메일: </label>
                <input
                    className="signup_input"
                    id="signup_email_input"
                    name="user_email"
                    type="email"
                    placeholder="이메일을 작성해주세요."
                    pattern=".+@globex\.com"
                    size="30"
                    required
                />
            </div>

            <div className="tel_wrap sign_up_input_wrap">
                <label htmlFor="signup_tel_input">전화번호: </label>
                <input
                    className="signup_input"
                    id="signup_tel_input"
                    name="user_tel"
                    type="tel"
                    placeholder="전화번호을 작성해주세요."
                />
            </div>

            <button className="sign_up_submit" onClick={() => submit()}>
                submit
            </button>
        </div>
    )
}

export default SignUp
