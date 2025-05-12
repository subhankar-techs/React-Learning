import React from 'react';

interface Props{
    handleClick:()  => void;
    children:React.ReactNode;
}

function Button(props:Props) {
    console.log(`Button rendered with ${props.children}`);
    return (
        <button onClick={props.handleClick}>{props.children}</button>
    );
}

export default React.memo(Button);


