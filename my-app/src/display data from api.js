import { useState,useEffect } from "react";

function GithubUser({name,location,avatar}){

    return(
        <div>
            <h1>{name}</h1>
            <p>{location}</p>
            <img src={avatar} height={150}/>

        </div>

    );
}

function Start(){
    const [data,setData]=useState(null);
    useEffect(()=>{

        fetch(`https://api.github.com/users/moonhighway`)
        .then((response)=>response.json())
        .then(setData);
    },[]);
   if (data) 
    return (

        <GithubUser
            name={data.name}
            location={data.location}
            avatar={data.avatar_url}></GithubUser>
    );      


    return <h1>DATA</h1>;
}

export default Start;