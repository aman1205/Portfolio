import React from 'react'
import { motion } from 'framer-motion'
import  Typewriter from 'typewriter-effect'

const Home = () => {
    const animation ={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }
        }
    }
  return (
    <div id="home">
      <section>
        <div>
            <motion.h1 {...animation.h1}>Hi , I Am <br /> AMAN KUMAR</motion.h1>
            
            <Typewriter />
            
        </div>
      </section>
    </div>
  )
}

export default Home
