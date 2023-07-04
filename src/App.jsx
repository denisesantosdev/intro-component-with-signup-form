import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [form, setForm] = React.useState({
    "first name": "",
    "last name": "",
    email: "",
    password: "",
  });

  const [showMessage, setShowMessage] = React.useState(false);

  function handleOnChange(event) {
    const { name, value } = event.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    //console.log(form);
    //handleEmpty("first name");
    setShowMessage(true);
  }

  function handleEmpty(input) {
    if (form[input] === "") {
      return `${input} can not be empty`;
    }
  }

  return (
    <main>
      <section>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
        <button>Try it free 7 days then $20/mo. thereafter</button>
      </section>
      <section>
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              type="text"
              id="first-name"
              name="first name"
              value={form["first name"]}
              onChange={handleOnChange}
            />
            <label htmlFor="first-name">First Name</label>
            <p>{showMessage ? handleEmpty("first name") : ""}</p>
          </div>
          <div>
            <input
              type="text"
              id="last-name"
              name="last name"
              value={form["last name"]}
              onChange={handleOnChange}
            />
            <label htmlFor="last-name">Last Name</label>
            <p>{showMessage ? handleEmpty("last name") : ""}</p>
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleOnChange}
            />
            <label htmlFor="email">Email</label>
            <p>{showMessage ? handleEmpty("email") : ""}</p>
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleOnChange}
            />
            <label htmlFor="password">Password</label>
            <p>{showMessage ? handleEmpty("password") : ""}</p>
          </div>
          <button>Claim your free trial</button>
        </form>
      </section>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <a href="">Terms and Services</a>
      </p>
    </main>
  );
}

export default App;
