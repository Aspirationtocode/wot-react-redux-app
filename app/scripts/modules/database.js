import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBcIdaCluMasyIVcROrXzLxOEBHX3K939Y",
  authDomain: "wot-react-redux-app.firebaseapp.com",
  databaseURL: "https://wot-react-redux-app.firebaseio.com",
  storageBucket: "wot-react-redux-app.appspot.com",
  messagingSenderId: "876089870939"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const DATABASE = {};

DATABASE.loadPlayers = function(players) {
	database.ref('players').set(players);
}

export default DATABASE;
