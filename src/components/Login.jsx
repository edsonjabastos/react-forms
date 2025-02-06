import { useState } from "react";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [loginEntry, setLoginEntry] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    // console.log("Email:", email);
    // console.log("Password:", password);

    console.log("Email:", loginEntry.email);
    console.log("Password:", loginEntry.password);
  }

  function handleLoginEntryChange(identifier, value) {
    setLoginEntry({
      ...loginEntry,
      [identifier]: value,
    });
  }

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleLoginEntryChange("email", e.target.value)}
            value={loginEntry.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleLoginEntryChange("password", e.target.value)}
            value={loginEntry.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
