import Land from '@/components/Land';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Landscape({
    searchParams,
}){
    return (
        <>
            <NavBar isBW = {searchParams.isBW}/>
                <Land isBW={searchParams.isBW}/>
            <Footer isBW={searchParams.isBW}/>
        </>
    );
}