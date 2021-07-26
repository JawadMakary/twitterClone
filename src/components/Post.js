import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
const Post = ({displayName,username,
    verified,text,
    image,avatar
}) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://avatars.githubusercontent.com/u/69002670?v=4" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Jawad Makary {""} <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge" />
                            @jawad138
                            </span></h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/media/E7JOYWOWUAI0rCj?format=jpg&name=small" alt="" />
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            </div>
            </div>
        </div>
    )
}

export default Post
