import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setuser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="container">
      <span className="user">{user.name}</span>
      <form>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={!username || !password} onClick={handleClick}>
          {loading ? "please wait" : "Login"}
        </button>
        <span data-testid="error" style={{ visibility: error ? "visible" : "hidden" }}>
          Something went wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;
