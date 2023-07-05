import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import MainContainer from '../components/MainContainer'

const users = ({users}) => {

    

    return (
        <MainContainer keywords={'users page'}>
            <h1>Пользователи</h1>
            {users.map((item)=>
                <li>
                    <Link href={`/users/${item.id}`}>{item.name}</Link>
                </li>
            )}
        </MainContainer>
    );
};

export default users;

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return { props: { users } }
}