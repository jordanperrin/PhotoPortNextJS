import Land from '@/components/Land';
import NavBar from '@/components/NavBar';
// import Footer from '@/components/Footer';
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../../../components/Footer'),{});

export default function LandscapeColor(){
    let state = false;
    return (
        <>
            <NavBar isBW = {state} onPage = "clr"/>
                <Land isBW={state}/>
            <DynamicFooter isBW={state}/>
        </>
    );
}