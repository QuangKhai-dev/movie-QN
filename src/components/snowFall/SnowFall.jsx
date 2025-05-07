import React from 'react';
import Snow from 'react-snowfall';

const SnowFall = () => {
    return (
        <Snow
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                zIndex: 30
            }}
        />
    )
}

export default SnowFall