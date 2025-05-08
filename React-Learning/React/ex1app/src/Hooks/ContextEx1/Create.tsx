import React from "react";

interface Test{
    name:string,
    age:number,
    location:string
}

const testcontext = React.createContext({msg:'', empdata:[] as Test[]});

export default testcontext;