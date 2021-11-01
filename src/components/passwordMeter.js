import React from 'react';
import zxcvbn from 'zxcvbn';

function passwordMeter({ password }) {
    const testResult = zxcvbn(password);
    const num = testResult.score * 100/4;

    const createPassLabel = () => {
        switch(testResult.score) {
            case 0:
              return 'Heel zwak';
            case 1:
              return 'Zwak';
            case 2:
              return 'Middel';
            case 3:
              return 'Sterk';
            case 4:
              return 'Zeer sterk';
            default:
              return '';
        }
    }

    const progressColor = () => {
        switch(testResult.score) {
            case 0:
              return '#828282';
            case 1:
              return '#EA1111';
            case 2:
              return '#FFAD00';
            case 3:
              return '#9bc158';
            case 4:
              return '#00b500';
            default:
              return 'none';
        }
    };

    const changeProgressColor = () => ({
        background: progressColor(),
        width: `${num}%`,
        height: '7px'
    });

    return (
        <>
            <div className='progress' style={{ height: '7px', width: '100%' }}>
                <div className='progress-bar' style={changeProgressColor()}></div>
            </div>
            <p className='progress-label' style={{ color: progressColor() }}>{createPassLabel()}</p>
        </>
    )
}

export default passwordMeter
