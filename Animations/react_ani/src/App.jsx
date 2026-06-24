import React from 'react'
import {motion} from 'framer-motion'

const App = () => {

  return (
    <div>
      <motion.div
     drag
     dragConstraints={{
      top:0,
      left:0,
      right:1000,
      bottom:300

     }}
     dragDirectionLock='true'
whileHover={{
  backgroundColor:'royalblue'
}}
whileTap={{
  scale:0.9
}}
      // initial={{
      //   x:300
      // }}
      //  animate={{
      //   x:900,
      //   y:300,
      //   rotate:360,
       
      //  }}
      //  transition={{
      //   duration:2,
      //   delay:1,
      //   ease:'anticipate',
      //    repeat:Infinity
      //  }}
       id="box">


      </motion.div>

      <motion.h1>

      </motion.h1>
    </div>
  )
}

export default App