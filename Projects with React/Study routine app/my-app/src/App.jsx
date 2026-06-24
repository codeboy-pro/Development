import React, { useState } from 'react'






const App = () => {

const [title, settitle] = useState("");
const [desc, setdesc] = useState("");
const [time, settime] = useState("");

const [maintask,setmaintask]=useState([]);


const submitHandler=(e)=>{
e.preventDefault();
setmaintask([...maintask,{title,desc,time}]);
settitle("");
setdesc("");
settime("");
}


const deleteHandelar=(i)=>{
let copytask=[...maintask];
copytask.splice(i,1);
setmaintask(copytask);
}
let rendertask=<h2>No task available</h2>
if(maintask.length>0){
  rendertask=maintask.map((t,i)=>{
return <li key={i}>
  <div className='Lio'>
    <h2 className='title'>{t.title}</h2>
    <h2>{t.desc}</h2>
    <h2>{t.time}</h2>
  </div>
  <button
  onClick={()=>{
    deleteHandelar(i);

  }}
  className='delete'>Delete</button>
</li>
  })
}

  return (
    <>
<h1>My study routine </h1>
<form onSubmit={submitHandler}>
  <input type="text" placeholder='Enter subject' 
  
  value={title} onChange={(e)=>{
    settitle(e.target.value);

  }}
  />



  <input type="text" placeholder='Enter description ' 
  value={desc}
  onChange={(e)=>{
    setdesc(e.target.value);
  }}
  />
  <input type="text" placeholder='Enter duration ' 
  value={time}
  onChange={(e)=>{
    settime(e.target.value);
  }}
  />



  <button>Add task</button>


</form>

<div className='hero'>
  <ul>
{rendertask}
  </ul>
</div>
    </>
  )
}

export default App