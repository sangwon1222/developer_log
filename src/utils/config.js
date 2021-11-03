/* eslint-disable import/no-anonymous-default-export */
let prefix_value = '/'
document.location.href.slice(5) === 'local'
    ? (prefix_value = '/')
    : (prefix_value = 'developerscode')
export default {
    prefix: prefix_value,
    user_info: {
        kr: {
            name: '이름을 작성해주세요.',
            email: '이메일을 작성해주세요.',
            전화번호: '전화번호을 작성해주세요.',
            id: '아이디를 작성해주세요.',
            password: '이름을 작성해주세요.',
        },
        en: {
            name: 'name.',
            email: 'email.',
            tel: 'tel.',
            id: '아이디를 작성해주세요.',
            password: '이름을 작성해주세요.',
        },
    },
}
