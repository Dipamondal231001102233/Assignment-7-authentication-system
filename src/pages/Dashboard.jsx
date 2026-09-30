import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard</h1>

      <h2>Hello, {user} 👋</h2>

      <p>You are successfully logged in.</p>

      <div className="auth-status">
        <h3>Authentication Status</h3>
        <p>✅ User authenticated</p>
        <p>✅ Protected route active</p>
        <p>✅ JWT token simulated</p>
        <p>✅ User remembered using Local Storage</p>
      </div>

      <p>
        This dashboard is protected and can only be accessed by logged-in
        users.
      </p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;