import React,{useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useHistory } from 'react-router';
function Login({authService}) {
    console.log(authService);
    const history = useHistory();
    const goToMaker = (userId)=>{
        console.log("maker로 간다아아앗!");
        history.push({
            pathname: '/maker',
            state:{id:userId}
        });
    }
    function onLogin(e){
        console.log(e.target.innerHTML);
        const provider = e.target.innerHTML;
        authService.login(provider).then(data=>goToMaker(data.user.uid));
    }

    useEffect(()=>{
        authService.onAuthChange(user=>{
            user&& goToMaker(user.uid);
        })
    })
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
