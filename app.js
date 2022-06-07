const firebaseConfig = {
  apiKey: "AIzaSyANxe10sLblvr-7sZmCLDDLqx0EQdkVCQg",
  authDomain: "contactform-46ef8.firebaseapp.com",
  projectId: "contactform-46ef8",
  storageBucket: "contactform-46ef8.appspot.com",
  databaseURL: "https://contactform-46ef8-default-rtdb.firebaseio.com/",
  messagingSenderId: "381827487116",
  appId: "1:381827487116:web:e57050282180a1232ef2a9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference message collection
const messagesRef = firebase.database().ref("contactform");

//listen for form submit
document.getElementById("contactform").addEventListener("submit", SubmitForm);

//submit form
function SubmitForm(e) {
  e.preventDefault();

  //get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var subject = getInputVal("subject");
  var message = getInputVal("message");

  //save message
  saveMessage(name, email, subject, message);

  //enable alert
  document.querySelector(".alert").style.display = "block";
  //document.querySelector(".alert");
  document.getElementById("contactform").reset();

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);
}

document.getElementById("contactform").reset();
//functions to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//save mesaages to firebase

function saveMessage(name, email, subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}
