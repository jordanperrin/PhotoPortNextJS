import BwPort from '@/components/BwPort';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function BWPort(){
    return (
        <>
            <NavBar isBW = {false}/>
                <BwPort />
            <Footer isBW={false}/>
        </>
    );
}