import React, { useMemo } from 'react';

function Balance ({ users }){
    const balance = useMemo(
        () => users.reduce((cur,user) => cur+=user.balance, 0),
        [users])
    console.log('Log ::: balance ::: ', balance);
    return (
        <h1>
            Balance {balance}
        </h1>
    );
}

export default Balance;