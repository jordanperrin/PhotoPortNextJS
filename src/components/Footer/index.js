"use client";
import Link from 'next/link';
import styles from './Footer.module.css';
import {useRef, useEffect, useState } from 'react';
import IgIcon from '@/components/IgIcon';



export default function Footer(props){
    const burnRef = useRef();
    const [burnDivVisible, setburnDivVisible] = useState(false);

    //observe when user scrolls over film burn div 
    useEffect(() =>{
        //set a timeout of 4s for Observer to start observing so when film-container drops in we dont see film-burn div drop down
        const delayTimeout = setTimeout(() =>{
          const observer = new IntersectionObserver((entries)=>{ //callback function that is going to be fired every time visibility of that observed element
             const entry = entries[0];
             setburnDivVisible(entry.isIntersecting); //uses the useState() hook
             //  console.log("entry", entry);
           });
      
          observer.observe(burnRef.current)
          //clean-up 
          return () => {
           observer.disconnect();
          };
    
        },4000);
    
        return () => clearTimeout(delayTimeout);
      }, []);//empty array as a dependency will only run once when component is initialized
  

      return (
        <div className={styles.container}>
          <div className = {styles.burncontainer}>
            <div ref={burnRef} className={` ${ props.isBW ? ( burnDivVisible ? styles['filmburnBW'] : styles["offscreen"] ): (burnDivVisible ? styles['filmburnCLR'] : styles["offscreen"])}`}></div>
            <div className={`${burnDivVisible ? styles['igcontainershow'] : styles['igcontainer']}`}>
              <ul className={styles.footerUl}>
                <li>
                  <Link href="https://www.instagram.com/cinema.tif/" className={styles.link}>
                    <IgIcon className={styles.igicon}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      );
}