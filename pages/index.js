import Link from 'next/link'
import Navbar from '../components/Navbar';
import MainContainer from '../components/MainContainer'

const index = () => {
    return (
            <MainContainer keywords={'main page'}>
                <h1>Главная страница</h1>
            </MainContainer>
    );
};

export default index;