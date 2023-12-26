// "use client";
import Image from 'next/image'
import styles from './page.module.css'
import Landscape from '@/components/Land';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../components/Footer'), {
  ssr: false,
});
const DynamicLandscape = dynamic(() => import('../components/Land'), {
});


export default function Home() {
  return (
    <>
     <NavBar isBW={true}/>
      <DynamicLandscape isBW={true}/>
     <DynamicFooter isBW={true}/>
    </>
  );
}
