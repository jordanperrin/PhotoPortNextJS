import styles from './SvgNav.module.css';

export default function SvgNav(props){
    
    return(
        <div className="svgParent" >
         <svg id="burn" className={styles.svg} xmlns="http://www.w3.org/2000/svg" >
            <defs>
                        <filter id="wavy-nav"  width="1000%" height="103%" x="0" y="0"  >
                        <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="4" seed="2" >
                            <animate attributeName="baseFrequency" values="0.02;0.005;0.02"   />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="25" />
                        {/* <feMorphology operator="erode" radius="1"/>
                        <feMorphology operator="dilate" radius="1"/>   */}
                        </filter>
                        </defs>
            </svg> 
            </div>
    );
}
