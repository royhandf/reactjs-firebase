import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/profile");
        localStorage.setItem("name", result.user.displayName);
        localStorage.setItem("photo", result.user.photoURL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="container">
      <div className="card">
        <img
          className="illustration"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdni.iconscout.com%2Fillustration%2Fpremium%2Fthumb%2Flogin-3305943-2757111.png&f=1&nofb=1&ipt=5bdd1e2c1eb9864cc719c4fb66942d719c4d74c6d3962fb721e9c91a06bb87f4&ipo=images"
          alt="illustration"
        />
        <h2>Welcome</h2>
        <p>Login</p>
        <div className="google-btn" onClick={signInWithGoogle}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google sign-in"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
