import Land from '@/components/Land';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic'

const DynamicNavBar = dynamic(() => import('../../../components/NavBar'),{});

export default function LandscapeColor(){
    let state = false;
    return (
        <>
            <DynamicNavBar isBW = {state} onPage = "clr"/>
                <Land isBW={state}/>
            <Footer isBW={state}/>
        </>
    );
}