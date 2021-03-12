import React from 'react';
import styles from './header.module.css';
import './header.module.css';
function Header({onLogout}) {
    return (
        <header className={styles.header}>
            {true&& <button onClick={onLogout} className={styles.logout}>logout</button>}
            <img className={styles.logo} src="../.././images/logo.png" alt=""/>
            <h1 className={styles.title}>Business Card Maker</h1>
        </header>
    )
}

export default Header
