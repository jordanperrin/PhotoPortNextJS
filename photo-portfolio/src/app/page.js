"use client";
import Image from 'next/image'
import styles from './page.module.css'
import BwLand from '@/components/BwLand';
import NavBar from '@/components/NavBar';


export default function Home() {
  return (
    <>
     <NavBar/>
      <BwLand />
    </>
  );
}
