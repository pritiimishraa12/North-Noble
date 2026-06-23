import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleAuth(e) {
    e.preventDefault();

    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        alert(error.message);
      } else {
        alert("Login successful");
        navigate("/");
        console.log(data);
      }
    } else {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        alert(error.message);
      } else {
        alert("Signup successful");
        navigate("/");
        console.log(data);
      }
    }
  }

  return (
    <div className="signin-page">
      <div className="signin-box">
        <p className="auth-label">Member Access</p>

       <h2>{isLogin ? "Login" : "Create Account"}</h2>

        <p>
     {isLogin
     ? "Enter your credentials to continue your luxury shopping experience."
     : "Join North & Noble and create your account."}
     </p>

<div className="auth-divider"></div>

        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <div className="auth-switch">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;