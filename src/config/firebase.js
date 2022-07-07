import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDOWLP2iomP1rodhi7RnvywdSb4_zn4UcM",
  authDomain: "mswebsite-be8e2.firebaseapp.com",
  databaseURL: "https://mswebsite-be8e2-default-rtdb.firebaseio.com",
  projectId: "mswebsite-be8e2",
  storageBucket: "mswebsite-be8e2.appspot.com",
  messagingSenderId: "362327405010",
  appId: "1:362327405010:web:156b553d41f284100e580b"
};
firebase.initializeApp(firebaseConfig);
export default firebase;