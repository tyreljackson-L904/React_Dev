import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "github-api-interface.firebaseapp.com",
  projectId: "github-api-interface",
  storageBucket: "github-api-interface.appspot.com",
  messagingSenderId: "681607403711",
  appId: "1:681607403711:web:dfb7b8d3ce7b0a82890e0a",
  measurementId: "G-X8CEY2DQ0K",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GithubAuthProvider();

const signInWithGithub = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      const login = res.user.reloadUserInfo.screenName;
      console.log(login);
      localStorage.setItem("login", login);
    })
    .catch((er) => {
      console.log(er);
    });
};

export default signInWithGithub;
