import Post from './Post';
//store
import {createStore} from 'redux';
import reducer from "../../reducers";

function PostStage() {
    const store = createStore(reducer);
    const post = store.getState()
    
    return (
        <div className="post-stage">
            {
                post.map( info => (
                <Post
                    key={info.idx}
                    info={info}
                />
                ))
            }
        </div>
    )
}

export default PostStage;