import React from 'react';

function Title() {
    console.log("Title Rendering" );
    return (
        <>
            <h3>Use Callback Hooks</h3>
        </>
    )
}
export default React.memo(Title);