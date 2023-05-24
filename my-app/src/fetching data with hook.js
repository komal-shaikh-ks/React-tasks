import { useState,useEffect } from "react";

function Main(){
    const [data,setData]=useState(null);
    useEffect(()=>{

        fetch(`https://api.github.com/users/moonhighway`)
        .then((response)=>response.json())
        .then(setData);
    },[]);
   if (data) 
    return (

        <pre>{JSON.stringify(data,null,2)}</pre>
    );      


    return <h1>DATA</h1>;
}

export default Main;