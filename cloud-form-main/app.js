//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyAHzdQBuayNNvj6Z0cqDIflj4rpiKAnIxI",
    authDomain: "koraid.firebaseapp.com",
    projectId: "koraid",
    storageBucket: "koraid.appspot.com",
    messagingSenderId: "297060588990",
    appId: "1:297060588990:web:16fe8352c9af96d4b9adef",
    measurementId: "G-4FCRJVSQRQ"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("explore");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let img = document.getElementById("img").value;
  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;
  let harga = document.getElementById("harga").value;
  let displayPreview = document.getElementById("displayPreview").value;
  let displayBuy = document.getElementById("displayBuy").value;

  firestore
    .collection("explore")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (firstName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      img: img,
      name: name,
      author: author,
      harga: harga,
      displayPreview: displayPreview,
      displayBuy: displayBuy,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});
