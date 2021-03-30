// 파베랑 리라돔은 npm으로 깔아둔 상태!
import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService{
    login(providerName){
        console.log("login");
        const provider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(provider);
    }
    onAuthChange(someFunction){
        firebaseApp.auth().onAuthStateChanged((user)=>{
            someFunction(user);
        })
    }
    // 내가 만든 함수의 인자로, onAuthStateChanged라는 firebase 자체 함수의 return값(유저정보)을 집어 넣는 함수인거지 그니까
    logout(){
        console.log("logout");
        firebaseApp.auth().signOut();
    }
}

export default AuthService;