import React from 'react';

//media
import './SpinnerDoubleBounce.css';

const SpinnerDoubleBounce = ({color}) => {
    
    const styleBackgroudColor = {
        backgroundColor: color ? color : '#555'
    }

    return (
        <div className="spinner">
            <div className='double-bounce1' style={styleBackgroudColor}></div>
            <div className="double-bounce2" style={styleBackgroudColor}></div>
        </div>
    );
}
export default SpinnerDoubleBounce;
