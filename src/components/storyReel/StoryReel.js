import React from 'react';
import './StoryReel.css';
import Story from '../story/Story';
import { useStateValue } from '../../StateProvider';

function StoryReel() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className='storyReel'>
            <Story image='https://cdn.britannica.com/s:700x500/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg' profileSrc={user.photoURL} title={user.displayName} />
            <Story image='https://cdn.britannica.com/s:700x500/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg' profileSrc={user.photoURL} title={user.displayName} />
            <Story image='https://cdn.britannica.com/s:700x500/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg' profileSrc={user.photoURL} title={user.displayName} />
            <Story image='https://cdn.britannica.com/s:700x500/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg' profileSrc={user.photoURL} title={user.displayName} />
            <Story image='https://cdn.britannica.com/s:700x500/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg' profileSrc={user.photoURL} title={user.displayName} />
        </div>
    )
}

export default StoryReel
