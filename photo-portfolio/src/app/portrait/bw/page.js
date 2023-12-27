import Port from '@/components/Port';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function PortaitBW(){
    return (
        <>
            <NavBar isBW = {true} onPage = "bw"/>
                <Port isBW={true}/>
            <Footer isBW={true}/>
        </>
    );
}