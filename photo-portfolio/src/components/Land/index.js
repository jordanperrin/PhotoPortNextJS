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
      const [initialRendered, setInitialinitialRendered] = useState(false);
      const [windowSize, setWindowSize] = useState(600);

      useEffect(() => {
        const handleWindowResize = () => {
          let screenW = window.innerWidth;
          let product = window.innerHeight * window.innerWidth;
          //need this check otherwise scrollbar on mobile triggers new height 
          if(window.innerWidth != screenW){
            setWindowSize(product);
          }
        };
        window.addEventListener('resize', handleWindowResize);
        
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      useEffect(() => {
        let img_container = document.getElementById('img-contain');
        let square_perf = document.getElementById('square-ref');
        const style1 = getComputedStyle(img_container);
        const style2 = getComputedStyle(square_perf);
        let imgConSize = parseInt(img_container.clientHeight) + (parseInt(getComputedStyle(img_container).padding));
        let squareSize = 2+parseInt(square_perf.clientHeight )+ parseInt(getComputedStyle(square_perf).marginBottom) + parseInt(getComputedStyle(square_perf).marginTop);
        console.log("\nImage: "+ imgConSize);
        console.log("\nSquare: " + squareSize);
        generatePerfs(Math.ceil(imgConSize/squareSize));
  
        }, [windowSize]);

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
              <div id='square-ref' className={`${styles.sqaure} ${styles[string]}`}>
                <span className={styles.invisible}> Placeholder</span>
              </div>
            );
          
          setRightPerfs(listOfPerfs);
        }
      }

      //runs when screen width is chanegd

      //TODO -> REFACTOR CLEAN UP
        
        
        let sqrColor;
        if(props.isBW){
           sqrColor = "bwsquare";
        }else{
          sqrColor = "clrsquare";
        }

      if(!initialRendered){
        generatePerfs(21);
        setInitialinitialRendered(true);
      }

      return (
        
        <div className={styles.filmcontainer}> 
          <div className={styles.mainFilm}>
            <div className={styles.leftPerfs}>
              <div id={styles.leftPerf}>
                {leftPerfs.length > 0 && leftPerfs}
              </div>
            </div>
            <div id='img-contain' className={styles.imgContainer}>
                <div className={styles.insideimg} id="first-img">
                  <Image src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={1200} height={800} alt=""/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                <Image src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={1200} height={800} alt=""/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy' src={img2} alt=""/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image src={img3} alt = ""/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy'  src={img1} width={300} height={200}/>
                  <div className={styles.block} id='messed-up-block'></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy' src={img1} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy'  src={img1} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy' src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy'  src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200} />
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy'  src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy'  src={'https://photo-port.s3.amazonaws.com/post1-7.jpg'} width={300} height={200}/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy' src={img2} alt=""/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy' src={img2} alt=""/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy' src={img2} alt=""/>
                  <div className={styles.block}></div>
                </div>
                <div className={styles.insideimg}>
                  <Image loading='lazy' src={img2} alt=""/>
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