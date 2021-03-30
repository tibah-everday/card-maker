import React,{useEffect} from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';
import './maker.css'
import { useHistory } from 'react-router';
function Maker({authService}) {
    const history = useHistory();
    function handleLogout(){                
        authService.logout();
        console.log("handlelogout발동, 이 logout발동 이후에 login컴포넌트의 useEffect가 발동하는 이유를 모르겠네... 그리고 그게 발동하는데 왜 MAKER컴포넌트의 useEffect에 있는 push함수가 발동해서 알아서 화면이 바뀌는거지?")        
    }
    useEffect(()=>{
        console.log("렌더링 된 makerㄴㅐ useeffect발동")
        authService.onAuthChange((user)=>{
            if(!user){
                history.push("/");
            }
        })
    })
    // 로그아웃 버튼을 눌렀을 때 maker가 렌더링 되는 것도 아닌데 왜 useEffect안의 push함수가 작동하지? 심지어 그 위 콘솔은 안 뜨는데...(로그인 할 때 maker가 렌더링 되니까 그 때 뜨는데)
    return (
        <section className="maker">
            <div className="header">
                <Header onLogout={handleLogout}/>
            </div>
            <div className="contents">
                <div className="carddMaker">cardMaker</div>
                <div className="carddPreview">cardPreview</div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </section>
    )
}

export default Maker
