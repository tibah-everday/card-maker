import React, {useState, useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './login.css';
import { useHistory } from 'react-router';
function Login({authService}) {
    const history = useHistory();
    function goToMaker(userId){
        history.push({
            pathname:"/maker",
            state:{id: userId}
        })
    }
    useEffect(()=>{
        console.log("렌더링 된 login내 useeffect발동");
        authService.onAuthChange((user)=>{
            user&&goToMaker(user.id);
        })
        // 결국 onAuthStateChanged는 addEventListener같은 거임. 맨 첨에 렌더링 될때 인자로 전달한 함수를 등록만 해놓고(state변하면 콜백 실행해라~) 끝!
    })
    function handleLogin(e){
        authService.login(e.target.innerHTML).then((data)=>{
            goToMaker(data.user.uid);
        });          
    }
    
    
     
    return (
        <section className="login">
            <div className="header">
                <Header authService={authService}/>
            </div>
            <div className="loginArea">
                <ul>
                    <li onClick={handleLogin}>Google</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </section>
    )
}

export default Login
