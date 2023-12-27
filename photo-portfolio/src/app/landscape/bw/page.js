import Land from '@/components/Land';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function LandscapeBW(){
    let state = true;
    return (
        <>
            <NavBar isBW = {state} onPage = "bw"/>
                <Land isBW={state}/>
            <Footer isBW={state}/>
        </>
    );
}