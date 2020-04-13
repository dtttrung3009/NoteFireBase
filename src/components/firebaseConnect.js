import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyC1jutE_Q6GlApt9LyKsOH6pkL2HA6xtcI",
  authDomain: "notemanager-7b7af.firebaseapp.com",
  databaseURL: "https://notemanager-7b7af.firebaseio.com",
  projectId: "notemanager-7b7af",
  storageBucket: "notemanager-7b7af.appspot.com",
  messagingSenderId: "206592044216",
  appId: "1:206592044216:web:dbe8b49151b2b03b02d84d",
  measurementId: "G-0T0LP8JZQ8",
};
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref("/dataForNote");
