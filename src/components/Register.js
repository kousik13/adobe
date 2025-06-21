import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h2>Create your PopX account</h2>
      <input placeholder="Full Name" />
      <input placeholder="Phone number" />
      <input placeholder="Email address" />
      <input placeholder="Password" type="password" />
      <input placeholder="Company name" />
      <div>
        <label>Are you an Agency?</label><br />
        <input type="radio" name="agency" value="yes" /> Yes
        <input type="radio" name="agency" value="no" /> No
      </div>
      <button className="btn primary" onClick={() => navigate('/settings')}>Create Account</button>
    </div>
  );
}

export default Register;
