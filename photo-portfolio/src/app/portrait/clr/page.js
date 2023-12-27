import Port from '@/components/Port';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function PortaitColor(){
    return (
        <>
            <NavBar isBW = {false} onPage = "clr"/>
                <Port isBW={false}/>
            <Footer isBW={false}/>
        </>
    );
}