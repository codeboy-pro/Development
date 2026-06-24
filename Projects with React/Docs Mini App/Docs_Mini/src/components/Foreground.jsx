import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
  const ref=useRef(null);

 const data=[
  {desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo ipsam corporis cum.",
    filesize:".9mb",
    close:true,
    tag:{isopen:false,tagline:"Download Now",tagcolor:"green"}},
  {desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo ipsam corporis cum.",
    filesize:".9mb",
    close:false,
    tag:{isopen:true,tagline:"Download Now",tagcolor:"blue"}},
  {desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo ipsam corporis cum.",
    filesize:".9mb",
    close:true,
    tag:{isopen:true,tagline:"Upload",tagcolor:"green"}},
  ]
  return (
  
<div ref={ref} className='w-full fixed z-[3] top-0 left-0 h-full flex gap-10 flex-wrap p-5'>
{data.map((item,index)=>(
  <Card data={item} reference={ref}/>
))}

</div>

  )
}

export default Foreground