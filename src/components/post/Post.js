import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar
                    src={profilePic}
                    className='post_avatar'
                />
                <h3>{username}</h3>
                <p>Timestamp...</p>
                {/*<p>{new Date(timestamp?.toDate()).toUTCString()} </p>*/}
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <dic className="post_image">
                <img src={image} alt=""/>
            </dic>
        </div>
    )
}

export default Post
