import "./Admin.css";
import { useEffect, useState } from "react";

function Admin() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function login(e) {
    e.preventDefault();
    setStatus({ state: "sending", msg: "Logging in..." });

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Login failed");

      localStorage.setItem("adminToken", data.token);
      setToken(data.token);
      setPassword("");
      setStatus({ state: "success", msg: "Logged in." });
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
    }
  }

  async function loadMessages(activeToken) {
    setStatus({ state: "sending", msg: "Loading messages..." });

    try {
      const res = await fetch("/api/admin/messages", {
        headers: { Authorization: `Bearer ${activeToken}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to load messages");

      setMessages(data.messages || []);
      setStatus({ state: "idle", msg: "" });
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
    }
  }

  async function deleteMessage(id) {
    if (!window.confirm("Delete this message?")) return;

    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Delete failed");

      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      alert(err.message);
    }
  }

  function logout() {
    if (!window.confirm("Log out of admin?")) return;
    localStorage.removeItem("adminToken");
    setToken("");
    setMessages([]);
    setStatus({ state: "idle", msg: "" });
  }

  useEffect(() => {
    if (token) loadMessages(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) {
    return (
      <div className="admin-page">
        <div className="admin-box">
          <h1>Admin Login</h1>
          <p>Enter your admin password to view submissions.</p>

          <form onSubmit={login} className="admin-form">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Admin password"
              required
            />
            <button type="submit" disabled={status.state === "sending"}>
              {status.state === "sending" ? "Logging in..." : "Login"}
            </button>
          </form>

          {status.state === "error" && (
            <p className="admin-status error">{status.msg}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-top">
        <h1>Submissions</h1>
        <div className="admin-actions">
          <button onClick={() => loadMessages(token)}>Refresh</button>
          <button className="danger" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      {status.state === "error" && (
        <p className="admin-status error">{status.msg}</p>
      )}

      <div className="admin-table">
        <div className="admin-row head">
          <div>Name</div>
          <div>Email</div>
          <div>Company</div>
          <div>Date</div>
          <div>Actions</div>
        </div>

        {messages.map((m) => (
          <div className="admin-row" key={m._id}>
            <div>{m.name}</div>
            <div className="mono">{m.email}</div>
            <div>{m.company || "-"}</div>
            <div className="mono">{new Date(m.createdAt).toLocaleString()}</div>
            <div className="row-actions">
              <button onClick={() => alert(m.message)}>View</button>
              <button className="danger" onClick={() => deleteMessage(m._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}

        {messages.length === 0 && status.state !== "sending" && (
          <p className="empty">No submissions yet.</p>
        )}
      </div>
    </div>
  );
}

export default Admin;
