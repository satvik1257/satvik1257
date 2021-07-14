var firebaseConfig = {
    apiKey: "AIzaSyBpL1ZaY9GJXjTDla_M2zOBXcKxIE4ZXfo",
    authDomain: "let-s-chat-app-3945b.firebaseapp.com",
    projectId: "let-s-chat-app-3945b",
    storageBucket: "let-s-chat-app-3945b.appspot.com",
    messagingSenderId: "236761126655",
    appId: "1:236761126655:web:913de09f70d240d7fa1eca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
 function add_room()
 {
     room_name= document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}

