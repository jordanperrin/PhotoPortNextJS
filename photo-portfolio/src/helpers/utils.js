import Image from 'next/image';

export const getRandomNumber = ()=>{
    return  Math.floor(Math.random() * 16) + 1;;
}

export const calculateSizes = () => {
    const imgContainer = document.getElementById('img-contain');
    const squareRef = document.getElementById('square-ref');
  
    const imgConSize = parseInt(imgContainer.clientHeight) + parseInt(getComputedStyle(imgContainer).padding);
    const squareSize = 2 + parseInt(squareRef.clientHeight) + parseInt(getComputedStyle(squareRef).marginBottom) + parseInt(getComputedStyle(squareRef).marginTop);
  
    return {
      imgConSize,
      squareSize,
    };
  };

export const generatePerfs = (count, sqrColor, styles, getRandomNumber, setLeftPerfs, setRightPerfs) =>{
    let listOfLeftPerfs = [];
  let listOfRightPerfs = [];

  for (let i = 0; i < count; i++) {
    let string = sqrColor + getRandomNumber();
    listOfLeftPerfs.push(
      <div className={`${styles.sqaure} ${styles[string]}`}>
        <span className={styles.invisible}> Placeholder</span>
      </div>
    );
  }
  setLeftPerfs(listOfLeftPerfs);

  for (let i = 0; i < count; i++) {
    let string = sqrColor + getRandomNumber();
    listOfRightPerfs.push(
      <div id='square-ref' className={`${styles.sqaure} ${styles[string]}`}>
        <span className={styles.invisible}> Placeholder</span>
      </div>
    );
  }
  setRightPerfs(listOfRightPerfs);
  }

export const generateImages = (count, styles, setListImgTag, srcImg) =>{
    let arrayOfImages = [];
    for(let i =0; i <= count; i++){
        arrayOfImages.push(
            <div className={styles.insideimg} id="first-img">
                <Image src={srcImg} width={1200} height={800} alt=""/>
                <div className={styles.block}></div>
            </div>
        )
    }
    setListImgTag(arrayOfImages);
  }