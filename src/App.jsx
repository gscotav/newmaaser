import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { useState } from 'react'

import './App.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlXsyeg5XTmCQqIdv1MXO-bGo5aU-FIqE",
  authDomain: "maaser-10835.firebaseapp.com",
  databaseURL: "https://maaser-10835-default-rtdb.firebaseio.com",
  projectId: "maaser-10835",
  storageBucket: "maaser-10835.appspot.com",
  messagingSenderId: "937738971373",
  appId: "1:937738971373:web:b366604fad065ca12944e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// Add test data to a generic path
const dataRef = ref(db, "testdata");
set(dataRef, {
  message: "This is a test message",
});

function App() {


  // Function to write data to the database using a separate button
  const writeToDatabaseSeparateButton = () => {
    const dataRef = ref(db, "testdata");
    set(dataRef, {
      message: "Data from separate button",
    })
      .then(() => {
        console.log("Data pushed to Firebase from separate button.");
      })
      .catch((error) => {
        console.error("Error pushing data to Firebase from separate button: ", error);
      });
  };

  return (
    <>
     
      <div>
        <button onClick={writeToDatabaseSeparateButton}>
          Write Data to Firebase (Separate Button)
        </button>
      </div>
    </>
  )
}

export default App;
