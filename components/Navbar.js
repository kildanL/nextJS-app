import React from 'react';
import st from '../style/Navbar.module.css';
import Link from 'next/link'

const Navbar = ({text,href}) => {
    return (
        <div className={st.navbar}>
                <Link href="/" >Главная</Link>
                <Link href="/users">Пользователи</Link>
        </div>
    );
};

export default Navbar;