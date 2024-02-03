import Land from '@/components/Land';
import NavBar from '@/components/NavBar';
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../../../components/Footer'),{});


export default function LandscapeBW(){
    let state = true;
    return (
        <>
            <NavBar isBW = {state} onPage = "bw"/>
                <Land isBW={state}/>
            <DynamicFooter isBW={state}/>
        </>
    );
}