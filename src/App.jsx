import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
    event.preventDefault()
    console.log(form);
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
              name="firstName"
              value={form.firstName}
              onChange={handleOnChange}
            />
            <label htmlFor="first-name">First Name</label>
          </div>
          <div>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={form.lastName}
              onChange={handleOnChange}
            />
            <label htmlFor="last-name">Last Name</label>
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
