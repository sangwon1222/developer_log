import { useState } from 'react'
import '../../css/post.css'
//store
// import { createStore } from 'redux'
// import reducer from '../../reducers'
// import { actionCreators as tomatoActions } from "../../reducers";

function Post(props) {
    // const store = createStore(reducer);

    const [like, changeLike] = useState([props.info.like])

    // function mapDispatchToProps(dispatch){
    //     return {
    //         increamentLike: bindActionCreators(tomatoActions.increamentLike,dispatch)
    //         decreamentLike: bindActionCreators(tomatoActions.decreamentLike,dispatch)
    //     }
    // }

    function clickLike(info) {
        let likeCnt = info.like
        let state = '좋아요'
        if (!info.alreadyLike) {
            // dispatch({type: 'INCREAMENT_LIKE'})
            likeCnt = info.like + 1
            state = '좋아요'
        } else {
            // dispatch({type: 'DECREAMENT_LIKE'})
            likeCnt = info.like
            state = '좋아요 취소'
        }
        info.alreadyLike = !info.alreadyLike
        changeLike(likeCnt)
        console.log(`${info.idx}번째 포스트의 ${state} => ${likeCnt}`)
    }
    return (
        <div className="post">
            <div className="post-wrap">
                <div className="title">
                    {props.info.title}
                    <span
                        className="like"
                        onClick={() => clickLike(props.info)}
                    >
                        <p className="like-emoji"> 👍</p>
                        {/* {props.info.like} */}
                        {like}
                    </span>
                </div>

                <div>{props.info.date}</div>
            </div>
        </div>
    )
}

export default Post
