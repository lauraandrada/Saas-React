import { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [view, setView] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );

  const renderRegisterForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Reset Password
      </button>
    </form>
  );

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">
          {view === 'login' && 'Login'}
          {view === 'register' && 'Register'}
          {view === 'forgot' && 'Forgot Password'}
        </h2>

        {view === 'login' && renderLoginForm()}
        {view === 'register' && renderRegisterForm()}
        {view === 'forgot' && renderForgotPasswordForm()}

        <div className="links">
          {view !== 'login' && (
            <button
              onClick={() => setView('login')}
              className="link-btn"
            >
              Back to Login
            </button>
          )}
          {view === 'login' && (
            <>
              <button
                onClick={() => setView('register')}
                className="link-btn"
              >
                Create an account
              </button>
              
              <div className="divider">
                <span>Or sign in with</span>
              </div>
              
              <div className="social-buttons">
                <button className="social-btn">
                  <img src="/api/placeholder/24/24" alt="Google" />
                </button>
                <button className="social-btn">
                  <img src="/api/placeholder/24/24" alt="Facebook" />
                </button>
                <button className="social-btn">
                  <img src="/api/placeholder/24/24" alt="Apple" />
                </button>
              </div>
              
              <button
                onClick={() => setView('forgot')}
                className="link-btn"
              >
                Forgot Password?
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;