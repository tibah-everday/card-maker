import firebase from 'firebase';
import firebaseApp from './firebase'
class AuthService{
    login(providerName){
        console.log(firebaseApp);
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;