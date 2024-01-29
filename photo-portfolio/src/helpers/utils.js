import Image from 'next/image';

export const getRandomNumber = ()=>{
    return  Math.floor(Math.random() * 16) + 1;;
}

export const calculateSizes = () => {
    const imgContainer = document.getElementById('img-contain');
    const squareRef = document.getElementById('square-ref');
  
    const imgConSize = parseInt(imgContainer.clientHeight) + parseInt(getComputedStyle(imgContainer).padding);
    const squareSize = 2 + parseInt(squareRef.clientHeight) + parseInt(getComputedStyle(squareRef).marginBottom) + parseInt(getComputedStyle(squareRef).marginTop);

    console.log("Image contain size: " + imgConSize + "\nSqaure Size: " + squareSize)
  
    return {
      imgConSize,
      squareSize,
    };
  };

export const generatePerfs = (count, sqrColor, styles, getRandomNumber, setLeftPerfs, setRightPerfs) =>{
    let listOfLeftPerfs = [];
    let listOfRightPerfs = [];

    let inlineStyle = sqrColor === 'bwsquare' ? { 'filter': 'grayscale()' } : {};


  for (let i = 0; i < count; i++) {
    let string = 'clrsquare' + getRandomNumber();
    listOfLeftPerfs.push(
      <div className={`${styles.sqaure} ${styles[string]}`} style={inlineStyle}>
        <span className={styles.invisible}> Placeholder</span>
      </div>
    );
  }
  setLeftPerfs(listOfLeftPerfs);

  for (let i = 0; i < count; i++) {
    let string = 'clrsquare' + getRandomNumber();
    listOfRightPerfs.push(
      <div id='square-ref' className={`${styles.sqaure} ${styles[string]}`} style={inlineStyle}>
        <span className={styles.invisible}> Placeholder</span>
      </div>
    );
  }
  setRightPerfs(listOfRightPerfs);
  }

export const generateImages = (count, styles, setListImgTag, srcImg, orientHoriz) =>{
    let arrayOfImages = [];
    let ratio = orientHoriz ? [1200, 800] : [800,1200];
    for(let i =0; i <= count; i++){
        arrayOfImages.push(
            <div className={styles.insideimg} id="first-img">
                <Image src={srcImg} width={ratio[0]} height={ratio[1]} alt=""/>
                <div className={styles.block}></div>
            </div>
        )
    }
    setListImgTag(arrayOfImages);
  }