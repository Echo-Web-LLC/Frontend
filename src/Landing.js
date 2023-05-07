import React from 'react';
import globe from './Images/globe.png'

function Landing(props) {
    return (
        <>
            <div className='canvas_3D_container'>
                <img src={globe} alt="3D globe"/>
                <h1 className='Landing_Header'>
                   3D Design         
                </h1>
            </div> 
        </>
    );
}

export default Landing;