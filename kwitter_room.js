
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDPlOiBxmOu_BwqavM3dF2psAOj8gYB10w",
  authDomain: "hijj-1ce2c.firebaseapp.com",
  projectId: "hijj-1ce2c",
  storageBucket: "hijj-1ce2c.appspot.com",
  messagingSenderId: "802872031873",
  appId: "1:802872031873:web:65bef9950f6a402545eb80"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("useridoiit").innerHTML = "Welcome " + user_name + "!";

function addd()
{
  room_name = document.getElementById("iminurhouse").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logoutt() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
