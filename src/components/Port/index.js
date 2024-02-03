"use client";
import { useEffect, useState } from 'react';
import {getRandomNumber, calculateSizes, generatePerfs, generateImages} from '../../helpers/utils';
import styles from '../Land/Land.module.css';
import Image from 'next/image'
import Photos from '../../../public/images.json'


export default function Port(props){
      const [leftPerfs, setLeftPerfs] = useState([]);
      const [rightPerfs, setRightPerfs] = useState([]);
      const [imgListTag, setListImgTag] = useState([]);
      const [initialRendered, setInitialinitialRendered] = useState(false);
      const [windowSize, setWindowSize] = useState(600);


      let sqrColor;
      let photoList;
      if(props.isBW){
        sqrColor = "bwsquare";
        photoList = Photos.BWPort;
      }else{
        sqrColor = "clrsquare";
        photoList = Photos.ClrPort;
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
      generateImages(photoList, styles, setListImgTag, true);
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