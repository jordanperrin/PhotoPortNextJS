"use client";
import {useRef, useEffect, useState } from 'react';
import { LuInstagram as IgIcon} from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import Link from 'next/link';
import styles from './BwLand.module.css';
import Image from 'next/image'
import { getStaticProps } from 'next';
//TODO: need to change the way we import these images -> use an 
import img1 from '../../../public/post1-7.jpg';
import img2 from '../../../public/post1-4.jpg';
import img3 from '../../../public/post1-2.jpg';
import img4 from '../../../public/post2-8.jpg';
import img5 from '../../../public/post2-10.jpg';

let prevVal;
const getRandomNumber = ()=>{
  let newVal =  Math.floor(Math.random() * 16) + 1;
  while(newVal === prevVal ){
    newVal =  Math.floor(Math.random() * 16) + 1;
  }
  return newVal;
}

export default function BwLand(){
      const burnRef = useRef();
      const [leftPerfs, setleftPerfs] = useState([]);
      const [rightPerfs, setRightPerfs] = useState([]);
      const [burnDivVisible, setburnDivVisible] = useState(false);
      const [btmIconsVisible, setbtmIconsVisible] = useState();

        if(leftPerfs.length ===0){
          const listOfPerfs=[];
          for (let i = 0; i < 26; i++) {
            let string = "square" + getRandomNumber();
            listOfPerfs.push(
              <div className={`${styles.sqaure} ${styles[string]}`}>
                <span className={styles.invisible}> Placeholder</span>
              </div>
            );
          }
          setleftPerfs(listOfPerfs);
        }
    
        if(rightPerfs.length ===0){
          const listOfPerfs=[];
          for (let i = 0; i < 26; i++) {
            let string = "square" + getRandomNumber();
            listOfPerfs.push(
              <div className={`${styles.sqaure} ${styles[string]}`}>
                <span className={styles.invisible}> Placeholder</span>
              </div>
            );
          }
          setRightPerfs(listOfPerfs);
        }
    
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
        <div className={styles.filmcontainer}> 
          <div className={styles.mainFilm}>
            <div className={styles.leftPerfs}>
              <div id={styles.leftPerf}>
                {leftPerfs.length > 0 && leftPerfs}
              </div>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.insideimg} id="first-img">
                  <Image priority={true} src={img1} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority={true} src={img2} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority={true} src={img3} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority={true} src={img4} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority={true} src={img1} />
                  <div className={styles.block} id='messed-up-block'></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority={true} src={img1} />
                  <div className={styles.block}></div>
                </div>
              <div className={styles.insideimg}>
              </div>
            </div>
            <div className={styles.leftPerfs}>
              <div id={styles.rightPerf}>
                {rightPerfs.length > 0 && rightPerfs}
              </div>
            </div>
          </div>
    
        <div className = {styles.burncontainer}>
            <div ref={burnRef} className={` ${burnDivVisible ? styles['filmburn'] : styles["offscreen"]}`}></div>
            <div className={`${burnDivVisible ? styles['igcontainer show'] : styles['igcontainer']}`}>
              <ul className={styles.contactlist}>
                <li>
                  <Link href="/" >
                    <IgIcon className={styles.igicon}/>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <LuMail className={styles.igicon}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
    
          <svg className={styles.svg}>
            <filter id="wavy">
              <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="5" seed="2">
                <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="25" />
            </filter>
          </svg> 
        </div>
    );
}