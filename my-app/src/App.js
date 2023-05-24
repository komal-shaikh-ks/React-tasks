import logo from './logo.svg';
import { useState,useEffect,useReducer,useRef } from 'react';
//import Counter from './Counter';
import './App.css';

function githubUser({name}){
  <div>
    <h1>{name}</h1>
  </div>

}

function App() {

  // using USEEFFECT
  const  [emotion,setEmotion]=useState("happy");
  const [firstArray,setFirstArray]=useState("tired");
  // USINF USE REF UNCONTROLLED components
  const txtTitle=useRef();
  const hexColor=useRef();
  // USING USEEFFECT()
  useEffect(()=>{console.log(`it is  ${emotion} right now`);},[emotion]);
  useEffect(()=>{console.log(`it is second emotion ${firstArray}`);},[firstArray])
  // const [checked,setChecked]=useState(false)
  const [checked,setChecked]=useReducer((checked)=>!checked,false)
  const submit=(e)=>{e.preventDefault();
    const title=txtTitle.current.value;
    const color=hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value="";
    hexColor.current.value="";

  };
  // custom HOOK
  function useInput(initialValue){
    const [value,setValue]=useState(initialValue);
    return [{
      value,
      onChange:(e)=>setValue(e.target.value)
    },()=>setValue(initialValue)
  ];

  }

    const [data,setData]=useState(null);
      useEffect(()=>{
        fetch(`https://api.github.com/users/moonhighway`)
        .then((response)=>response.json())
        .then(setData)
      },[]);
      if(data)
        return ( <githubUser name={data.name}></githubUser>);
      
      
  return(
    <div className="App">
       <Counter />
      <h1>my emotion is now {emotion}</h1>
      <button onClick={()=>setEmotion("sad")}>Sad</button>
      <button onClick={()=>setEmotion("excited")}>Excited</button>
      <h2>currently second emotion is {firstArray}</h2>
      <button onClick={()=>setFirstArray("grateful")}>Grateful</button>
      <h1>-----------------------------------</h1>
      <input type='checkbox' value={checked} onChange={setChecked}></input>
      <label>{checked ? 'checked' : 'not checked'}</label>
      <h1>first form</h1>
      <form onSubmit={submit}>
      <input type='text' placeholder='type something' ref={txtTitle}></input>
      <input type='color' ref={hexColor}></input>
      <button>ADD</button>
      </form>

      {/* fetching data from https:  */}
       <h1>DATA</h1>
          
       
      
    </div>
  );
}

export default App;

