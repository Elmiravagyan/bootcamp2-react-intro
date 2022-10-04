import React from 'react';
import GalaryDivision from './../galaryDivision';

function DivisionContainer ({ records }){
    return (
        <div className='listWrapper'>
            {records.map(({
                id,
                images,
                division,
                copyright,
                creditline,
                totaluniquepageviews,
                verificationleveldescription
            }) => <GalaryDivision
                key={id}
            {...{
                id,
                images,
                division,
                copyright,
                creditline,
                totaluniquepageviews,
                verificationleveldescription
            }} />
            )}
        </div>
    );
}

export default DivisionContainer;