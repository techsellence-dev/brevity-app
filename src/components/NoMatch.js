import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./noMatch.css";
export default function NoMatch() {
  const navigate = useNavigate();
  return (
    <>
      <div className="error-msg">
        Page not found!!!!
        <br></br>
        <button onClick={() => navigate("/")}>Go to sign-in</button>
        <button onClick={() => navigate("/home")}>Back to Home</button>
      </div>
    </>
  );
}
