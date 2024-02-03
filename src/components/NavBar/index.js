"use client";
import {useState} from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import LandIcon from '@/components/LandIcon';
import PortIcon from '@/components/PortIcon';
import BurgerIcon from '@/components/BurgerIcon';
import CloseIcon from '@/components/CloseIcon';

const Navbar = (props) =>{

    const [dropDown, setdropDown]= useState(false);

    const showDropDown = () =>{
        setdropDown(!dropDown);
    }

    //.active class in css will e applied to any active link using NavLink tag
    return (
        
            <nav className= {styles.nav}>                
                <ul className={styles.navul}>
                    <li>
                        <Link href="" className={styles.navtitle}> JP</Link>
                    </li>
                    <li>
                        <Link href={`/landscape/${props.onPage}`} className={styles.a}>
                            <LandIcon className={styles.orienatationicon}/>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/portrait/${props.onPage}`} className={styles.a}>
                            <PortIcon className={styles.orienatationicon}/>
                        </Link>
                    </li>
                    <li>
                    <div className={styles.a} onClick={showDropDown}>
                      {!dropDown ? (
                            <BurgerIcon className={styles.menu} />
                        ) : (
                            <CloseIcon className={styles.menu} />
                        )}
                        </div>
                    </li>
                </ul>
            
                <div className=  { `${dropDown ?  styles.sideactive: styles.side}`}>
                    <ul className= {styles.navulDrop}> 
                        <li>
                            <Link href="" className={`${styles.navtitle} ${styles.hideNavElement}`}> JP</Link>
                        </li>
                        <li>
                            <Link href="/landscape/bw" className={styles.dropitem1} onClick={showDropDown} >
                                B/W
                            </Link>
                        </li>
                        <li >
                            <Link href='/landscape/clr' className={styles.dropitem2} onClick={showDropDown}  >
                                Color
                            </Link>
                        </li>
                        <li>
                            <div className={`${styles.a} ${styles.hideNavElement}`} >
                                 <CloseIcon className={styles.menu} />
                             </div>
                        </li>
                    </ul>     
                </div>
                {/* <div className={`${props.isBW ?  (dropDown ? styles.filmburnnavshowBW : styles.filmburnnavBW ): (dropDown ? styles.filmburnnavUnderShow : styles.filmburnnavUnder)}`}></div>

                <div className={`${props.isBW ?  (dropDown ? styles.filmburnnavshowBW : styles.filmburnnavBW ): (dropDown ? styles.filmburnnavshowCLR : styles.filmburnnavCLR)}`}>
                </div> */}

                <div className={styles.burnParent}>
                    <div className={`${props.isBW ?  (dropDown ? styles.filmburnnavshowBW : styles.filmburnnavBW ): (dropDown ? styles.filmburnnavshowCLR : styles.filmburnnavCLR)}`}>
                    </div>
                    <div className={`${props.isBW ?  (dropDown ? styles.filmburnnavshowBW2 : styles.filmburnnavBW2 ): (dropDown ? styles.filmburnnavshowCLR2: styles.filmburnnavCLR2)}`}>
                    </div>
                </div>
                

                <div className={styles.parentSvg}>
                    <svg>
                    <defs>
                        <filter id="wavy" xmlns="http://www.w3.org/2000/svg" >
                        <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="5" seed="2"  width="1000%" height="103%">
                            <animate attributeName="baseFrequency" values="0.02;0.005;0.02" />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="25" />
                        </filter>
                    </defs>
                    </svg> 
                </div>
            </nav>
        

        );
};

export default Navbar;