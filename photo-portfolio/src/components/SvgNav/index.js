import styles from './SvgNav.module.css';

export default function SvgNav(props){
    
    return(
        <>
         <svg className={styles.svg}>
                        <filter id="wavy-nav">
                        <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="4" seed="2">
                            <animate attributeName="baseFrequency" dur="80s" values="0.02;0.005;0.02" repeatCount="indefinite" />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="25" />
                        </filter>
            </svg> 
        </>
    );
}
