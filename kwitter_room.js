var firebaseConfig = {
      apiKey: "AIzaSyD6jMo-GD7wWskz1KI3HL_h-vIrEm09KqA",
      authDomain: "kwitter-562b1.firebaseapp.com",
      databaseURL: "https://kwitter-562b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-562b1",
      storageBucket: "kwitter-562b1.appspot.com",
      messagingSenderId: "479083204775",
      appId: "1:479083204775:web:7de21741035b61634a8b82",
      measurementId: "G-VZ1W436EFE"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
usuario=localStorage.getItem("user");
room_name=localStorage.getItem("roomname");
document.getElementById("username").innerHTML="¡Bienvenido al sitio del chisme :3!, "+usuario;

function addroom()
{
      room_name=document.getElementById("sala").value;
      firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
      localStorage.setItem("roomname", room_name);
      window.location="Kwitter_page.html";
}
function getData(){
firebase.database().ref("/" + room_name).on('value', function (snapshot) 
{ document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function (childSnapshot) {
       childKey = childSnapshot.key; 
       childData = childSnapshot.val();
       if (childKey != "purpose") { 
            firebase_message_id = childKey; 
            message_data = childData;
      //Inicio del código
      console.log(firebase_message_id);
      console.log(message_data); 
      name = message_data['name']; 
      message = message_data['message']; 
      like = message_data['like']; 
      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>"; 
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"; 
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>"; 
      row = name_with_tag + message_with_tag + like_button + span_with_tag; 
      document.getElementById("output").innerHTML += row;
      //Final del código
      }});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("roomname", room_name);
      window.location="Kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user");
      localStorage.removeItem("roomname");
      window.location="index.html";
}