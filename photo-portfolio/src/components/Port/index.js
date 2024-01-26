"use client";
import { useEffect, useState } from 'react';
import {getRandomNumber, calculateSizes, generatePerfs, generateImages} from '../../helpers/utils';
import styles from './Port.module.css';
import Image from 'next/image'
//TODO: need to change the way we import these images -> use an 
import img1 from '../../../public/color1.jpg';


export default function Port(props){
      const [leftPerfs, setLeftPerfs] = useState([]);
      const [rightPerfs, setRightPerfs] = useState([]);
      const [imgListTag, setListImgTag] = useState([]);
      const [initialRendered, setInitialinitialRendered] = useState(false);
      const [windowSize, setWindowSize] = useState(600);


      let sqrColor;
      if(props.isBW){
        sqrColor = "bwsquare";
      }else{
        sqrColor = "clrsquare";
      }

      useEffect(() => {
        const handleWindowResize = () => {
          const { imgConSize, squareSize } = calculateSizes();
          let product = imgConSize * squareSize;
          if(product != windowSize){
            setWindowSize(product);
          }
        };
        window.addEventListener('resize', handleWindowResize);
        
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    
    useEffect(() => {
      const { imgConSize, squareSize } = calculateSizes();
      generatePerfs(Math.ceil(imgConSize/squareSize), sqrColor, styles, getRandomNumber, setLeftPerfs, setRightPerfs);
      }, [windowSize]);

    if(!initialRendered){
      
      generatePerfs(28, sqrColor, styles, getRandomNumber, setLeftPerfs, setRightPerfs);
      generateImages(9, styles, setListImgTag, img1);
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
              {imgListTag}
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