import '../../css/signup/SignUp.scss'

function SignUp() {
    let duplicationFlag = false

    function enterEvent() {
        document.addEventListener('keydown', (e) => {
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

    function submit() {
        const name = document.getElementById('signup_name_input')
        const id = document.getElementById('signup_id_input')
        const pw = document.getElementById('signup_pw_input')
        if (name.value === '') {
            alert('이름을 작성하세요.')
            name.focus()
            return
        }
        if (id.value === '') {
            alert('아이디를 작성하세요.')
            id.focus()
            return
        }
        if (pw.value === '') {
            alert('비밀번호를 작성하세요.')
            pw.focus()
            return
        }
        if (!duplicationFlag) {
            alert('아이디 중복확인을 클릭하세요.')
            return
        }

        alert('회원가입 완료!')
        console.log(
            `이름: ${name.value} ,아이디:  ${id.value} , 비밀번호: ${pw.value}`
        )

        window.location.href = 'https://hkbvc1222.cafe24.com/developerscode'
    }

    return (
        <div className="sign_up_page">
            <div className="name_wrap">
                <label htmlFor="signup_name_input">이름: </label>
                <input
                    id="signup_name_input"
                    type="text"
                    placeholder="이름을 작성해주세요."
                />
            </div>

            <div className="id_wrap">
                <label htmlFor="signup_id_input">아이디: </label>
                <input
                    id="signup_id_input"
                    type="text"
                    placeholder="아이디를 작성해주세요."
                />
                <button className="id_duplicate" onClick={() => checkId()}>
                    아이디 확인
                </button>
            </div>

            <div className="pw_wrap">
                <label htmlFor="pw_input">비밀번호: </label>
                <input
                    id="signup_pw_input"
                    type="password"
                    maxLength="14"
                    placeholder="14자리 비밀번호 작성해주세요."
                />
            </div>

            <button className="sign_up_submit" onClick={() => submit()}>
                submit
            </button>
        </div>
    )
}

export default SignUp
