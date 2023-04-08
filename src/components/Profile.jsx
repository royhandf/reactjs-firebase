import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();
  const signOutUser = () => {
    localStorage.clear();
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Welcome, {localStorage.getItem("name")}</h1>
        <img
          className="photo-profile"
          src={localStorage.getItem("photo")}
          alt="profile"
        />
        <div className="btn-logout" onClick={signOutUser}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Profile;
