import React from 'react'
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
const Widgets = () => {
    return (
        <div className="widgets">
           
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1361008052921634823"} />
                <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Jawad_Makary138"
          options={{ height: 400 }}
        />
         <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100012246482077"}
          options={{ text: "Twitter Clone", via: "Jawad Makary" }}
        />
            </div>
        </div>
    )
}

export default Widgets
