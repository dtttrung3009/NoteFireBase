import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyC1jutE_Q6GlApt9LyKsOH6pkL2HA6xtcI",
    authDomain: "notemanager-7b7af.firebaseapp.com",
    databaseURL: "https://notemanager-7b7af.firebaseio.com",
    projectId: "notemanager-7b7af",
    storageBucket: "notemanager-7b7af.appspot.com",
    messagingSenderId: "206592044216",
    appId: "1:206592044216:web:dbe8b49151b2b03b02d84d",
    measurementId: "G-0T0LP8JZQ8"
  };
  // Initialize Firebase
  export const firebaseConnect=firebase.initializeApp(firebaseConfig);
// let data=firebase.database().ref('/dataForNote/note2');
// // data.once('value').then(snapshot=>console.log(snapshot.val()))
// data.set({
//   id:2,
//   tittleNote:'Sua tt node 2',
//   contentNote:'Noi dung sua node 2'
// });
let data=firebase.database().ref('/dataForNote/note3');
data.set({
  id:3,
  tittleNote:'tieu de note 3',
  contentNote:'Hoc react'
});


// import React, { Component } from "react";
// import "./../App.css";
// import * as firebase from "firebase";
// import { firebaseConnect } from "../firebaseConfig";

// export default class App extends Component {
//   pushData = () => {
//     let connect = firebase.database().ref("dataForNote");
//     connect.push({
//       tittle:'Ghi chu 4',
//       content:'Hoc angular 2'
//     })
//     console.log('ok');
//   };
//   deleteData = (id) => {
//     let connect = firebase.database().ref("dataForNote");
//     connect.child(id).remove();
//     console.log('xoa thanh cong voi id '+id);
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.pushData}>Click de luu</button>
//         <button onClick={()=>this.deleteData('-M4lm_Gt9iVZurSKrtW5')}>Click de xoa</button>
//       </div>
//     );
//   }
// }
