import React from 'react';

function Login() {
  return (
    <div className="screen">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <input placeholder="Enter email address" />
      <input placeholder="Enter password" type="password" />
      <button className="btn disabled">Login</button>
    </div>
  );
}

export default Login;
