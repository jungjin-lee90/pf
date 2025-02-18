import React, { useEffect, useState } from 'react';
import './ScrollBtn.css';

export default function ScrollBtn() {
    const [showButton, setShowButton] = useState(false);
  
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
  
    useEffect(() => {
        const scrollTop = window.scrollY;
        console.log("scroll value2 : " + scrollTop);
        const handleShowButton = () => {
            //if (scrollTop > 500) {
                setShowButton(true);
            //} else {
                //setShowButton(false);
            //}
        }
  
        window.addEventListener("scroll", handleShowButton);
        
        return () => {
            window.removeEventListener("scroll", handleShowButton);
        }
    }, []);
  
    return showButton && (
        <div className="scroll__container">
            <button id="top" onClick={scrollToTop} type="button" > Top</button>
        </div>
    );
  }