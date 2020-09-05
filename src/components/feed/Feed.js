import React from 'react';
import './Feed.css'
import { StoryReel, MessageSender, Post } from '..';



function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic='https://davidhisakson.com/static/media/me.b49a128f.jpg' //{profilePic}
                message='Test post.' //{message}
                timestamp='This is a timestamp' //{timestamp}
                username= 'Nobody' //{username}
                image='' //{image}
            />
        </div>
    )
}

export default Feed
