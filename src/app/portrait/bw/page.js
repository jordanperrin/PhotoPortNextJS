import Port from '@/components/Port';
import NavBar from '@/components/NavBar';
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../../../components/Footer'),{});

export default function PortaitBW(){
    return (
        <>
            <NavBar isBW = {true} onPage = "bw"/>
                <Port isBW={true}/>
            <DynamicFooter isBW={true}/>
        </>
    );
}