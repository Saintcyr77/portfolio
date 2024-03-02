"use client"
import { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view'
export default function Project() {
  const [hovered, setHovered] = useState<boolean>(false);
    return (
        <ScrollIntoView selector='#project'>
 <div className="flex content-center mb-5" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
                <hr className="text-white my-2 mr-3" style={{ width: hovered ? "80px" : "60px", transition: "width 0.3s" }} />
          <span className="text-white cursor-pointer font-bold">Projects</span>
          </div>
        </ScrollIntoView>
  );   
}
