import React from 'react'
import { motion } from 'framer-motion'
import  Typewriter from 'typewriter-effect'
import {BsArrowUpRight} from "react-icons/bs"
import profile from "../assets/profile.jpg"

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
        <div >
            <motion.h1 {...animation.h1}>Hi , I Am <br /> AMAN KUMAR</motion.h1>
            
            <Typewriter options={{
                strings:"Web Developmer  Sophomore in BTech. CSE from AKGEC. I am a full stack web developer willing to get involved in software writings and user-friendly website development I am a passionate learner interested in developing backends of websites",
                autoStart:true,
                loop:true,
                wrapperClassName:"typewriterpara",
            }} />
            
            <div>
               <a href="mailto:aman2110113@gmail.com">Hire me</a>
               <a href="#work">Projects <BsArrowUpRight/> </a>
                
                
            </div>
        </div>
      </section>

      <section>
        <div className="hero-image-u45">
           <div className="front-QmX">
              <div className="person-Z8d">
                 <img className="sssss-1-PdT" src={profile} alt="Profile"/>
              </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Home
