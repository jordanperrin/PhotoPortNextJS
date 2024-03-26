"use client";
import { Scroll, OrbitControls, ScrollControls, Environment, Sparkles} from "@react-three/drei";
import {Film} from "./Film";


export function Experience(){

    return(
        <>
         <color attach="background" args={['#333333']}/>
        <ambientLight intensity={.2}/>
        <spotLight position={[0, 25,0]} angle={1.3} penumber={1} castShadow intensity={2} shadow-bias={-0.0001}/>
        <Environment // can be true, false or "only" (which only sets the background) (default: false)
            preset={'warehouse'}
            />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3} damping={0.1}>f
            <Film scale={1.2}/>
            <Sparkles  count={400} size={2} color={"#E68734"} scale={[5,5,5]} />
            <Scroll>
                
            </Scroll>
            </ScrollControls>
            
        </>
    );
};