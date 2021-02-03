import firebase from "firebase";

const prodConfig = {
  apiKey: "AIzaSyDBrVS47wDyW1WcudTrz1Dp0vnZ2SCoN6E",
  authDomain: "github-explorer-d961b.firebaseapp.com",
  projectId: "github-explorer-d961b",
  storageBucket: "github-explorer-d961b.appspot.com",
  messagingSenderId: "1002270341018",
  appId: "1:1002270341018:web:61f92593ac5de49a612c23",
  measurementId: "G-HHGPSGCPM0",
};

const devConfig = {
  apiKey: "AIzaSyDBrVS47wDyW1WcudTrz1Dp0vnZ2SCoN6E",
  authDomain: "github-explorer-d961b.firebaseapp.com",
  projectId: "github-explorer-d961b",
  storageBucket: "github-explorer-d961b.appspot.com",
  messagingSenderId: "1002270341018",
  appId: "1:1002270341018:web:61f92593ac5de49a612c23",
  measurementId: "G-HHGPSGCPM0",
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

// {
//   "hosting": {
//     "public": "public",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ],
//     "rewrites": [
//       {
//         "source": "**",
//         "destination": "/index.html"
//       }
//     ]
//   }
// }
