import Port from '@/components/Port';
import NavBar from '@/components/NavBar';
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../../../components/Footer'),{});

export default function PortaitColor(){
    return (
        <>
            <NavBar isBW = {false} onPage = "clr"/>
                <Port isBW={false}/>
            <DynamicFooter isBW={false}/>
        </>
    );
}