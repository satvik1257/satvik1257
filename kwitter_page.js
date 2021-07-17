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
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    getData();
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
function send()
{
msg=document.getElementById("message").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
}