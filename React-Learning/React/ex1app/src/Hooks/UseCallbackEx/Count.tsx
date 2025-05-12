import React from 'react';

function Count(Props: { text: string; count: number }) {
    console.log('child render');
    return (
        <>
            {Props.text} is {Props.count}
        </>
    );
}
export default React.memo(Count);