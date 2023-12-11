"use client";
import {useState} from 'react';
import { MdOutlineCropLandscape as Landscape, MdOutlineCropPortrait as Portarit} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import styles from './NavBar.module.css';

const Navbar = () =>{
    
    const [dropDown, setdropDown]= useState(false);

    const showDropDown = () =>{
        setdropDown(!dropDown);
    }

    //.active class in css will e applied to any active link using NavLink tag
    return (
        <div>
            <nav className= {styles.nav}>
                <Link href="" className={styles.nav.title}> JP</Link>
                
                <ul>
                    <li>
                        <Link href="/vert">
                            <Landscape className={styles.orienatationicon}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/horiz">
                            <Portarit className={styles.orienatationicon}/>
                        </Link>
                    </li>
                </ul>
                
                <div className={styles.menucontainer}>
                    {!dropDown ? (
                            <GiHamburgerMenu className={styles.menu} onClick={showDropDown} />
                        ) : (
                            <IoMdClose className={styles.x} onClick={showDropDown} />
                        )}
                </div>

                <div className=  { `${dropDown ?  styles.sideactive: styles.side}`}>
                    <ul className= {styles.sideitems}>    
                        <li className={styles.dropDowntoggle}>
                            <Link href="/bw" className={styles.dropitem} onClick={showDropDown} >
                                BW
                            </Link>
                        </li>
                        <li className={styles.dropDowntoggle}>
                            <Link href='/color' className={styles.dropitem} onClick={showDropDown}  >
                                Color
                            </Link>
                        </li>
                    </ul>     
                </div>

                <div className={`${dropDown ?  styles.filmburnnavshow : styles.filmburnnav}`}></div>

                <svg className={styles.svg}>
                    <filter id="wavy-nav">
                    <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="4" seed="2">
                        <animate attributeName="baseFrequency" dur="80s" values="0.02;0.005;0.02" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="25" />
                    </filter>
                 </svg> 
            </nav>
        </div>

        );
};

export default Navbar;