import React from 'react'
function Header() {
  return (
    <nav>
        <NavContent/>
    </nav>
  )
};
const NavContent=()=>(
    
    <>
       <h2>AMAN KUMAR</h2> 
       <div>
        <a href="#home">Home</a>
        <a href="#home">Services</a>
        <a href="#home">Experience</a>
        <a href="#home">Project</a>
        <a href="#home">Skills</a>
        <a href="#home">Contact</a>
       </div>
       <a href="mailto:aman2110113@gmail.com"><button>Email</button>
       
       </a>
       

    </>

)

export default Header;
