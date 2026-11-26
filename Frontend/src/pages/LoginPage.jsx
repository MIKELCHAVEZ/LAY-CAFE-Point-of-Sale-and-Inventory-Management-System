import { useState } from 'react';
import { api } from '../lib/api';
import Icon from '../Components/Icon';
import logo from '../assets/laycafe.jpg';
export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  async function submit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const session = await api('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      onLogin(session);
    }
    catch (err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  }
  return <div className="auth-page">
    <div className="auth-left">
      <div className="auth-decoration one" />
      <div className="auth-decoration two" />
      <div className="auth-wordmark">LAY CAFÉ <span>✳</span></div>
      <div className="auth-left-content">
        <div className="auth-eyebrow">POINT OF SALE & INVENTORY</div>
        <h1>Every great day<br />starts with a <em>little</em><br />coffee.</h1>
        <p>A thoughtful workspace for your café. From the first order to the final cup.</p>
        <div className="auth-quote">
          <div className="auth-line" />
          <span>Made for the people behind the counter.</span>
        </div>
      </div>
      <div className="auth-left-footer">PLEASE ENJOY YOUR HAPPINESS <span>•</span> EST. 2021</div>
    </div>
    <div className="auth-right">
      <div className="auth-panel">
        <img className="auth-logo" src={logo} alt="Lay Cafe" />
        <div className="auth-label">WELCOME BACK</div>
        <h2>Sign in to Lay Café</h2>
        <p className="auth-description">One login, your own workspace. Enter your assigned account to continue.</p>
        <form onSubmit={submit} className="auth-form">
          <label>Username<input
            autoFocus
            required
            autoComplete="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter username"
          /></label>
          <label>Password<div className="password-wrap">
            <input
              required
              type={show ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button type="button" onClick={() => setShow(!show)}>
              {show ? 'Hide' : 'Show'}
            </button>
          </div></label>
          {error && <p role="alert" className="auth-error">
            {error}
          </p>}
          <button className="btn btn-primary auth-submit" disabled={loading}>
            {loading ? 'Logging in…' : 'Log In'}
          </button>
        </form>
        <p className="auth-help">For local setup, use the accounts defined in <code>Backend/.env</code>. Contact your administrator for credentials.</p>
      </div>
    </div>
  </div>;
}
