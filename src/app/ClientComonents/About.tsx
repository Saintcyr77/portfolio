"use client"
import ScrollIntoView from 'react-scroll-into-view'
export default function About() {
      const handleAboutScroll = () => {
    
  }
    return (
        <ScrollIntoView selector='#about'>

            <span className="text-white cursor-pointer font-bold">About</span>
        </ScrollIntoView>
  );   
}
