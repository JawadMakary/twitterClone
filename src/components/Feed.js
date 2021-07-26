import React,{useState,useEffect} from 'react'
import db from '../api/firebase'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from "react-flip-move";

const Feed = () => {
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map
                (doc=>
                    doc.data()
                    ))
        ))
    },[])
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <FlipMove>
            {posts.map(post=>(
 <Post displayName={post.displayName}
 username={post.username}
 verified={post.verified}
 text={post.text}
 avatar={post.avatar}
 image={post.image}
 />
            ))}
</FlipMove>           
        </div>
    )
}

export default Feed
