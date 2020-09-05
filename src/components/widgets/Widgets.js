import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe
                src="https://davidhisakson.com/"
                width='340'
                height='500'
                scrolling='yes'
                frameborder="0"
                allowTransparency='true'
                allow='encrypted-media'
            ></iframe>
        </div>
    )
}

export default Widgets
