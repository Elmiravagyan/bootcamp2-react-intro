import React, { useEffect } from 'react';
import close from './../../assets/close.svg';

function Bage ({ title, setUnmountCount, unmountCount }){

    useEffect(() => () => {
        console.log('Log ::: Unmounted ::: ');
        setUnmountCount(unmountCount + 1);
    }, []);

    return (
        <div className='wrapper'>
            <img
                className='icon'
                alt='close-icon'
                src={close}
            />
            <div className='card'>
                <div>{title}</div>
            </div>
        </div>
    );
}

export default Bage;