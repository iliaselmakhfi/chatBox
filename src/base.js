import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const config = {
    apiKey: "AIzaSyDUFBlmIrFcPy5YeJDBA2BVjD5araJd9p0",
    authDomain: "chatbox-app-3b246.firebaseapp.com",
    databaseURL: "https://chatbox-app-3b246-default-rtdb.firebaseio.com",
    projectId: "chatbox-app-3b246",
    storageBucket: "chatbox-app-3b246.appspot.com",
    messagingSenderId: "1085499248273",
    appId: "1:1085499248273:web:b8a7f2defeb3cba1457930",
    measurementId: "G-F086NGXD59"
}

const firebaseApp = firebase.initializeApp(config)

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base