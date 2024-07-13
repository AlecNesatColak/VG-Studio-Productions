import React from "react";

function Register() {
  return (
    <div>
      <div>Admin Register</div>
      <form>
        <label>Username</label>
        <input type="text" name="username" required />
        <label>Confirm Username</label>
        <input type="text" name="username" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Confirm Email</label>
        <input type="email" name="email" required />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
