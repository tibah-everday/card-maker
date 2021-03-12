// import Header from './components/header/header';
import Login from './components/login/login';
// import Footer from './components/footer/footer';
import styles from './App.module.css';

function App({authService}) {
  return (
    <div className={styles.loginArea}>
      {/* <Header></Header> */}
      <Login authService={authService} ></Login>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;