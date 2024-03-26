import styles from "./page.module.css";
import {Canvas} from "@react-three/fiber";
import { Experience } from "../Components/Experience.js";
import * as THREE from 'three'

export function Desktop(){
    return (
        <>
          <Canvas className={styles.canvas} camera={{
            fov: 10,
            position: [0,.5,4.3],
          }}>
            <Experience/>
            <axesHelper args={[5]} />
          </Canvas>
          </>
      );
}