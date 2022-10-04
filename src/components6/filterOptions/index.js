import React, { useState } from 'react';

function FilterOptions ({ departments, filterData }){
    const [division, setDivision] = useState('');

    const handleOnChange = (e) => {
        setDivision(e.target.value);
    }

    return (
        <div>
            <input value={division} onChange={handleOnChange} type="text"/>
            <button onClick={() => filterData(division)}>Search</button>
        </div>
    );
}

export default FilterOptions;