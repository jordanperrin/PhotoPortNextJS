import styles from './SvgNav.module.css';

export default function SvgNav(props){
    
    return(
         <svg id="burn" className={styles.svg}>
            <defs>
                        <filter id="wavy-nav">
                        <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="4" seed="2">
                            <animate attributeName="baseFrequency" values="0.02;0.005;0.02"  />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="25" />
                        </filter>
                        </defs>
            </svg> 
    );
}
