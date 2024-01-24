"use client";
import {useEffect, useState, useRef} from 'react';
import styles from './Land.module.css';
import Image from 'next/image'
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

export default function Land(props){
      const [leftPerfs, setleftPerfs] = useState([]);
      const [rightPerfs, setRightPerfs] = useState([]);
      const [perfCount, setPerfCount] = useState(20);
      const [initialRendered, setInitialinitialRendered] = useState(false);
      const [windowSize, setWindowSize] = useState(320);
      const imgRef = useRef();


      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth);
        };
        setWindowSize(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      // useEffect(() =>{
      //   const observer = new IntersectionObserver((entries)=>{
      //     const entry = entries[0];
      //     if(entry.isIntersecting){
      //       const img = entry.target;
      //       const src = img.getAttribute('data');

      //       img.setAttribute(src, 'src');

          // return () => {
          //   observer.disconnect();
          // };

      //     }
      //   }
      // , []);

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

      //runs when screen width is chanegd
      useEffect(() => {
          if(windowSize >= 335 && windowSize < 342){
            setPerfCount(21);
          }else if(windowSize >= 342 && windowSize < 365){
            setPerfCount(22)
          }else if (windowSize >= 365 && windowSize < 382 ){
            setPerfCount(24);
          }else if (windowSize >= 382 && windowSize< 408){
            setPerfCount(26);
           }else if(windowSize >= 408 && windowSize <434){
            setPerfCount(28);
           }else if(windowSize >= 434 && windowSize < 460 ){
            setPerfCount(30);
           }else if(windowSize >= 460 && windowSize < 487){
            setPerfCount(32);
           }else if(windowSize >= 487 && windowSize < 515){
            setPerfCount(34);
           }else if(windowSize >= 515 && windowSize < 538){
            setPerfCount(36);
           }else if(windowSize >= 538 && windowSize < 566){
            setPerfCount(38);
           }else if(windowSize >= 566 && windowSize < 590){
            setPerfCount(40);
           }else if(windowSize >= 590 && windowSize < 617){
            setPerfCount(42);
           }else if(windowSize >= 617 && windowSize < 643){
            setPerfCount(44);
           }else if(windowSize >= 643 && windowSize < 670){
            setPerfCount(46);
           }else if(windowSize >= 670 && windowSize < 695){
            setPerfCount(48);
           }else if(windowSize >= 695 && windowSize < 721){
            setPerfCount(50);
           }else if(windowSize >= 721 && windowSize < 747){
            setPerfCount(52);
           }else if(windowSize >= 747 && windowSize < 758){
            setPerfCount(44);
           }else if(windowSize >= 758 && windowSize < 786){
            setPerfCount(46);
           }else if(windowSize >= 820 && windowSize < 840){
            setPerfCount(48);
           }else if(windowSize >= 1024 && windowSize ){
            setPerfCount(52);
           }
           console.log('OH SHIT');
        }, [windowSize]);
      
      useEffect(()=>{
        generatePerfs(perfCount);
      }, [perfCount])

      if(!initialRendered){
        generatePerfs(perfCount);
        setInitialinitialRendered(true);
      }
        
      const myLoader=({src})=>{
        return `https://photo-port.s3.amazonaws.com/post1-7.jpg`;
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
                  <img loading='lazy' src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <img loading='lazy' src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy' src={img2} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <img src={img3} alt = ""/>
                  <div className={styles.block}></div>
                </div>
                <div ref={imgRef} className={styles.insideimg}>
                  <img loading='lazy'  src={img1} width={300} height={200}/>
                  <div className={styles.block} id='messed-up-block'></div>
                </div>
                <div className={styles.insideimg}>
                  <img loading='lazy' src={img1} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <img loading='lazy'  src={img1} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <img loading='lazy' src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <img loading='lazy'  src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <img loading='lazy'  src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <img loading='lazy'  src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200}/>
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