import * as firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyBUpyQ4cGj0yCk4hJV2tyTXGCcGMQOKxIw",
  authDomain: "todo-app-f78e7.firebaseapp.com",
  databaseURL: "https://todo-app-f78e7.firebaseio.com",
  projectId: "todo-app-f78e7",
  storageBucket: "todo-app-f78e7.appspot.com",
  messagingSenderId: "664119954559",
  appId: "1:664119954559:web:5d98a6e7e2cd01f4cc434a",
  measurementId: "G-SWC936N8J0"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebaseApp.auth()
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
