/* eslint-disable default-case */

// Import
// import * as likeCount from "../actions/likeCount";

// Actions
const POST_INFO = 'POST_INFO'
const INCREAMENT_LIKE = 'INCREAMENT_LIKE'
const DECREAMENT_LIKE = 'DECREAMENT_LIKE'

// Action Creators
function getInitialState() {
    return {
        type: POST_INFO,
    }
}

// Reducer
const initialState = [
    {
        idx: 0,
        title: 'JavaScript 포스트',
        date: '2021. 10. 10',
        like: 4,
        alreadyLike: false,
    },
    {
        idx: 1,
        title: 'TypeScript 포스트',
        date: '2021. 10. 11',
        like: 10,
        alreadyLike: false,
    },
]

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREAMENT_LIKE:
            return increamentLike(state)
        case DECREAMENT_LIKE:
            return decreamentLike(state)
        default:
            return state
    }
}

// Reducer Functions
function increamentLike(state) {
    return {
        ...state,
        like: state.like + 1,
    }
}

function decreamentLike(state) {
    return {
        ...state,
        like: state.like - 1,
    }
}

// Export Action Creators
const actionCreators = {
    getInitialState,
    increamentLike,
    decreamentLike,
}
console.log(actionCreators)

export default reducer
