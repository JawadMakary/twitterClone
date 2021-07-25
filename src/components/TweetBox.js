import {Avatar , Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'
const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar
                 src=
                 "https://avatars.githubusercontent.com/u/69002670?v=4" />
                <input placeholder="What's happening?" type="text" />

                </div>
               
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
