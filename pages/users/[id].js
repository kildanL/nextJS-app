import React from 'react';
import { useRouter } from 'next/router';
import st from '../../style/user.module.scss';
import MainContainer from '../../components/MainContainer';

export default function ({user}) {
    const {query} = useRouter();
    return (
        <MainContainer keywords={user.name}>
            <div className={st.user}>
                <h1>
                    Пользователь с id {query.id}
                </h1>
                <h1>Имя пользователя {user.name}</h1>
            </div>
        </MainContainer>
    );
};


export const getServerSideProps = async ({params}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return { props: { user } }
}