"use client";
import { useEffect, useState } from 'react';
import styles from './Port.module.css';
import Image from 'next/image'
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

export default function Port(props){
      const [leftPerfs, setleftPerfs] = useState([]);
      const [rightPerfs, setRightPerfs] = useState([]);
      const [perfCount, setPerfCount] = useState(42);
      const [initialRendered, setInitialinitialRendered] = useState(false);
      let sqrColor;
      let vw = 0;
      if(props.isBW){
        sqrColor = "bwsquare";
      }else{
        sqrColor = "clrsquare";
      }

      const generatePerfs = (count) => {
        let listOfPerfs=[];
        for (let i = 0; i < count; i++) {
          let string = sqrColor + getRandomNumber();
          listOfPerfs.push(
            <div className={`${styles.sqaure} ${styles[string]}`}>
              <span className={styles.invisible}> Placeholder</span>
            </div>
          );
        }
        setleftPerfs(listOfPerfs);
        listOfPerfs=[];
        for (let i = 0; i < count; i++) {
          let string = sqrColor + getRandomNumber();
          listOfPerfs.push(
            <div className={`${styles.sqaure} ${styles[string]}`}>
              <span className={styles.invisible}> Placeholder</span>
            </div>
          );
        
        setRightPerfs(listOfPerfs);
      }
    }
    
    //runs after inital render to get
    useEffect(() => {
      vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
       if(vw === 390){
        setPerfCount(26);
      }
    }, []);

    
    useEffect(()=>{
      generatePerfs(perfCount);
    }, [perfCount])

    if(!initialRendered){
      generatePerfs(perfCount);
      setInitialinitialRendered(true);
      console.log(vw);
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