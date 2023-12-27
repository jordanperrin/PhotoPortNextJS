"use client";
import {useState} from 'react';
import SvgNav from '@/components/SvgNav';
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
                <Link href="" className={styles.navtitle}> JP</Link>
                
                <ul className={styles.navul}>
                    <li>
                        <Link href={`/landscape/${props.onPage}`} >
                            <LandIcon className={styles.orienatationicon}/>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/portrait/${props.onPage}`}>
                            <PortIcon className={styles.orienatationicon}/>
                        </Link>
                    </li>
                </ul>
                
                <div className={styles.menucontainer} onClick={showDropDown}>
                    {!dropDown ? (
                            <BurgerIcon className={styles.menu} />
                        ) : (
                            <CloseIcon className={styles.x} />
                        )}
                </div>

                <div className=  { `${dropDown ?  styles.sideactive: styles.side}`}>
                    <ul className= {styles.sideitems}>    
                        <li className={styles.dropDowntoggle}>
                            <Link href="/landscape/bw" className={styles.dropitem} onClick={showDropDown} >
                                B/W
                            </Link>
                        </li>
                        <li className={styles.dropDowntoggle}>
                            <Link href='/landscape/clr' className={styles.dropitem} onClick={showDropDown}  >
                                Color
                            </Link>
                        </li>
                    </ul>     
                </div>

                <div className={`${props.isBW ?  (dropDown ? styles.filmburnnavshowBW : styles.filmburnnavBW ): (dropDown ? styles.filmburnnavshowCLR : styles.filmburnnavCLR)}`}></div>

                <SvgNav/>
            </nav>
        

        );
};

export default Navbar;