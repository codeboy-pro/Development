import React from 'react';
// import { FaFileAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {motion, scale} from "framer-motion"
const Card = ({data,reference}) => {
  return (
    <>
      <motion.div
       drag 
       dragConstraints={reference} 
      whileDrag={{scale:1.2}}
       dragElastic={0.1}
       dragTransition={{bounceStiffness:600,bounceDamping:30}}
       className='relative   flex-shrink-0 w-55 h-70 rounded-[50px] bg-zinc-900/90 text-white overflow-hidden px-5 py-10'>
<FaRegFileAlt/>
<p className='text-sm leading-tight
 mt-5 font-semibold'>{data.desc}.</p>



<div className='footer absolute left-0 w-full bottom-0 '>


  <div className='flex items-center px-8 py-2 justify-between mb-3'>
    <h5>{data.filesize}</h5>
    <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
      {data.close?<IoClose/>: <MdOutlineFileDownload size=".8em" color='#fff' />}
     
    </span>
  </div>

{
  data.tag.isopen&&  <div className={`tag w-full py-3 ${data.tag.tagcolor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
    <h3 className='text-sm font-semibold'>{data.tag.tagline}</h3>
  </div>
}



</div>


</motion.div>
    </>
  )
}

export default Card