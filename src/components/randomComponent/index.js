import React, { memo, useCallback } from 'react';

function RandomComponent({ message }){
    console.log('Log ::: Rendered ::: ');
    
    const fn = useCallback(() => {
        alert(message);
    }, [message])
    
    return (
        <div>
			{message}
        </div>
    );
}

export default memo(RandomComponent);