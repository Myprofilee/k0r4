// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAHzdQBuayNNvj6Z0cqDIflj4rpiKAnIxI",
    authDomain: "koraid.firebaseapp.com",
    projectId: "koraid",
    storageBucket: "koraid.appspot.com",
    messagingSenderId: "297060588990",
    appId: "1:297060588990:web:16fe8352c9af96d4b9adef",
    measurementId: "G-4FCRJVSQRQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //make firebase auth and reference
  const auth = firebase.auth();
  const db = firebase.firestore();
    //firestore ssettings
    // db.settings({ timestampsInSnapshots: true });

    document.addEventListener("DOMContentLoaded", function () {
        var toolTip = document.querySelectorAll(".tooltipped");
        var instances = M.Tooltip.init(toolTip);
      });