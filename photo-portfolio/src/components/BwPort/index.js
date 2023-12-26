"use client";
import {useRef, useEffect, useState } from 'react';
import { LuInstagram as IgIcon} from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import Link from 'next/link';
import styles from './BwPort.module.css';
import Image from 'next/image'
import { getStaticProps } from 'next';
//TODO: need to change the way we import these images -> use an 
import img1 from '../../../public/color1.jpg';

let prevVal;
const getRandomNumber = ()=>{
  let newVal =  Math.floor(Math.random() * 16) + 1;
  while(newVal === prevVal ){
    newVal =  Math.floor(Math.random() * 16) + 1;
  }
  return newVal;
}

export default function BwPort(props){
      const burnRef = useRef();
      const [leftPerfs, setleftPerfs] = useState([]);
      const [rightPerfs, setRightPerfs] = useState([]);

        if(leftPerfs.length ===0){
          const listOfPerfs=[];
          for (let i = 0; i < 53; i++) {
            //change this to props.value
            let string = "clrsquare" + getRandomNumber();
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
          for (let i = 0; i < 53; i++) {
            //change this to props.value
            let string = "clrsquare" + getRandomNumber();
            listOfPerfs.push(
              <div className={`${styles.sqaure} ${styles[string]}`}>
                <span className={styles.invisible}> Placeholder</span>
              </div>
            );
          }
          setRightPerfs(listOfPerfs);
        }
    
      
      
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
                  <Image priority src={img1} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority src={img1} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority src={img1} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority src={img1} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority src={img1} />
                  <div className={styles.block} id='messed-up-block'></div>
                </div>
                <div className={styles.insideimg}>
                  <Image priority src={img1} />
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
    
       
        </div>
    );
}