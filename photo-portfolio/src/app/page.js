// "use client";
import Image from 'next/image'
import styles from './page.module.css'
import BwLand from '@/components/BwLand';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../components/Footer'), {
  ssr: false,
});
const DynamicBwLand = dynamic(() => import('../components/BwLand'), {
});


export default function Home() {
  return (
    <>
     <NavBar/>
      <DynamicBwLand />
     <DynamicFooter/>
    </>
  );
}
