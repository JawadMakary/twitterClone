import {Avatar , Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import db from '../api/firebase'
import './TweetBox.css'
const TweetBox = () => {
const[tweetMessage,setTweetMessage]=useState("")
const[tweetImage,setTweetImage]=useState("")
const sendTweet=e=>{
    e.preventDefault()
    db.collection("posts").add({
        displayName:'jawad halby makary',
        username:"jawad138",
        verified:true,
        text:tweetMessage,
        avatar:"https://avatars.githubusercontent.com/u/69002670?v=4",
        image:tweetImage
    })
    setTweetImage("")
    setTweetMessage("")
}
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar
                 src=
                 "https://avatars.githubusercontent.com/u/69002670?v=4" />
                <input placeholder="What's happening?" 
                value={tweetMessage}
                onChange={e=>setTweetMessage(e.target.value)}
                type="text" />

                </div>
                <input
          
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={e=>setTweetImage(e.target.value)}
          placeholder="Optional: Enter image URL"
          type="text"
        />
                <Button
                type="submit"
                onClick={sendTweet}
                className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
