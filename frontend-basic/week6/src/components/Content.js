/* eslint-disable */

import React from 'react';

export default function Content(props) {
    return (
        <div className='content'>
            <div className={"list" + props.id} >
                <img className='listImg' src={`./${props.imgUrl}`} alt='photo'/>
                <div className='info'>
                    <img className='locate' src='./locate.png' />
                    <span className='cnty'>{props.country}</span>
                    <a>View on Google Maps</a>
                    <p className='infoTitle'>{props.title}</p>
                    <p className='infoDate'>{props.date}</p>
                    <p className='infoContent'>{props.content}</p>
                </div>
            </div>
        </div>
    )
}