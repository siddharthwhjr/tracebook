// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBF6f6fSJvSoQrCYJMfL8jdDOiVNQrhWBc",
      authDomain: "kwitterproject-c9002.firebaseapp.com",
      databaseURL: "https://kwitterproject-c9002-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-c9002",
      storageBucket: "kwitterproject-c9002.appspot.com",
      messagingSenderId: "968797247096",
      appId: "1:968797247096:web:806f0620095bd8e7323f8d"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
