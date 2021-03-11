
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT,
//   storageBucket: "businesscard-maker-6f258.appspot.com",
//   messagingSenderId: "336291989832",
//   appId: "1:336291989832:web:3d33db60038a44d9cfcb7d",
//   measurementId: "G-WNF0BNPHBT"
};
  
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();