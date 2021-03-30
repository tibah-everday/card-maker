import React,{useEffect} from 'react';
import { useHistory } from 'react-router';

function Header({onLogout}) {
    const history = useHistory();
    return (
        <header >
            <img src="../.././images/logo.png" alt=""/>
            <h1>Business Card Maker</h1>
            <button onClick={onLogout}>logout</button>
        </header>
    )
}

export default Header
