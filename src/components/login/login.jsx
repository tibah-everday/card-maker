import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
function Login({authService}) {
    console.log(authService);
    function onLogin(e){
        console.log(e.target.innerHTML);
        const provider = e.target.innerHTML;
        authService.login(provider).then((result)=>{
            console.log(result);
        });
    }
    return (
        <>
            <Header/>
            <div className={styles.login}>
                <h1>Login</h1>
                <ul>
                    <li>
                        <button onClick={onLogin}>Google</button>
                    </li>
                    <li>
                        <button onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export default Login
