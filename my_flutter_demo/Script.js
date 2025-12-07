
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getDatabase} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5nqiNzpX6h43_0lX9LcirlPDAzpSpucY",
    authDomain: "corpsee001.firebaseapp.com",
    projectId: "corpsee001",
    storageBucket: "corpsee001.firebasestorage.app",
    messagingSenderId: "460041610988",
    appId: "1:460041610988:web:668f7a81498933693ea7c9",
    measurementId: "G-J0QQ4E97J0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  
  console.log(db)