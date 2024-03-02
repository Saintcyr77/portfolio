"use client"
import ScrollIntoView from 'react-scroll-into-view'
import { useState } from 'react';
export default function About() {
    const [hovered, setHovered] = useState<boolean>(false);
    return (
        <ScrollIntoView selector='#about'>
   <div className="flex content-center mb-5" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
                <hr className="text-white my-2 mr-3" style={{ width: hovered ? "80px" : "60px", transition: "width 0.3s" }} />
          <span className="text-white cursor-pointer font-bold">About</span>
          </div>
        </ScrollIntoView>
  );   
}
