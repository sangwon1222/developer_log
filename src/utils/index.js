export function getRandomColor() {
    // 0 부터 99까지 랜덤 숫자
    const random = Math.floor(Math.random() * 100)

    // 랜덤 숫자 반환
    return random
}

export function validateEmail(email) {
    var re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return re.test(email)
}
