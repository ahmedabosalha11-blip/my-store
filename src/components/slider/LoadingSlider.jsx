import React from 'react'
import './slider.css';
function LoadingSlider() {
    return (
        <div className='container my-4'>
            <div className="loading">
                <p className='title'></p>
                <p className='para'></p>
                <div className='d-flex align-items-center gap-2 my-2'>
                    <div className="loading-div"></div>
                    <div className="loading-div d-none d-md-block"></div>
                    <div className="loading-div d-none d-md-block"></div>
                    <div className="loading-div d-none d-lg-block"></div>
                    <div className="loading-div d-none d-lg-block"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSlider
