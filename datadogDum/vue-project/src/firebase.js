import {initializeApp} from  'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDZx8OsJ03MaUMBLBVCuqmdtgM2lf7FtK8",
    authDomain: "democpp-63539.firebaseapp.com",
    projectId: "democpp-63539",
    storageBucket: "democpp-63539.appspot.com",
    messagingSenderId: "415928769861",
    appId: "1:415928769861:web:58d15b4582ba2c7c04322c"
  };

  //initialize db
  const firebaseApp = initializeApp(firebaseConfig);
  export default firebaseApp;
  