// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCVdo9RXXHZ-BkJoYv4ot8FQVzW4Jt34E0",
    authDomain: "cnpm-nc.firebaseapp.com",
    databaseURL: "https://cnpm-nc-default-rtdb.firebaseio.com",
    projectId: "cnpm-nc",
    storageBucket: "cnpm-nc.appspot.com",
    messagingSenderId: "868316542883",
    appId: "1:868316542883:web:a02c0dcaa650b10722cc16",
    measurementId: "G-1Y3MC5KPR8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
