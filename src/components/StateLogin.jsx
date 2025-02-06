import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const [loginEntry, setLoginEntry] = useState({
    email: "",
    // email:{
    //   value: "",
    //   didBlur: false,
    // },
    password: "",
  });

  // const emmailIsInvalid =
  //   loginEntry.email !== "" && !loginEntry.email.includes("@");

  const emmailIsInvalid = didEdit.email && !loginEntry.email.includes("@"); // && loginEntry.email < 8;
  const passwordIsInvalid = didEdit.password && loginEntry.password.length < 8;

  function handleSubmit(event) {
    event.preventDefault();

    // console.log("Email:", email);
    // console.log("Password:", password);

    // if (...) // validations

    console.log("Email:", loginEntry.email);
    console.log("Password:", loginEntry.password);

    setLoginEntry({
      // to reset values in state approach
      email: "",
      password: "",
    });
  }

  function handleLoginEntryChange(identifier, value) {
    setLoginEntry({
      ...loginEntry,
      [identifier]: value,
    });
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleLoginEntryChange("email", e.target.value)}
          value={loginEntry.email}
          // minLength={8}
          error={emmailIsInvalid && "Enter a valid email address"}
          required
        />

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(e) => handleLoginEntryChange("email", e.target.value)}
            value={loginEntry.email}
            required
          />
          <div className="control-error">
            {emmailIsInvalid && <p>Enter a valid email address</p>}
          </div>
        </div> */}

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleLoginEntryChange("password", e.target.value)}
          value={loginEntry.password}
          error={passwordIsInvalid && "Password must be at least 8 characters"}
          minLength={8}
          required
        />
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleLoginEntryChange("password", e.target.value)}
            value={loginEntry.password}
            required
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
