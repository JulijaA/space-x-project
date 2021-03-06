import React from 'react';
// style
import './style.scss';

const Loader = () => (
    <div className="loader__container d-flex justify-content-center align-items-center">
        <p>
            <span role="img" aria-label="rocket" className="mr-4">
                🚀
            </span>
            Loading
        </p>
        <div className="loader__dots--animation">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default Loader;
