import Port from '@/components/Port';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Portait({
    searchParams,
}){
    return (
        <>
            <NavBar isBW = {searchParams.isBW}/>
                <Port isBW={searchParams.isBW}/>
            <Footer isBW={searchParams.isBW}/>
        </>
    );
}