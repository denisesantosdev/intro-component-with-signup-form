import React from "react";

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
    setShowMessage(true);
  }

  function handleEmpty(input) {
    if (form[input] === "" && showMessage) {
      return `${input} can not be empty`;
    }
  }

  function handleError(input) {
    if (form[input] === "" && showMessage) {
      return `error`;
    }
  }

  return (
    <main className="container">
      <section className="text-section">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className="form-section">
        <button className="btn text-section__btn">
          Try it free 7 days then $20/mo. thereafter
        </button>
        <form onSubmit={handleOnSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              id="first-name"
              name="first name"
              value={form["first name"]}
              onChange={handleOnChange}
              className={handleError("first name")}
            />
            <label htmlFor="first-name">First Name</label>
            <p>{handleEmpty("first name")}</p>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              id="last-name"
              name="last name"
              value={form["last name"]}
              onChange={handleOnChange}
              className={handleError("last name")}
            />
            <label htmlFor="last-name">Last Name</label>
            <p>{handleEmpty("last name")}</p>
          </div>

          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleOnChange}
              className={handleError("email")}
            />
            <label htmlFor="email">Email</label>
            <p>{handleEmpty("email")}</p>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleOnChange}
              className={handleError("password")}
            />
            <label htmlFor="password">Password</label>
            <p>{handleEmpty("password")}</p>
          </div>
          <button className="btn form-section__btn">
            Claim your free trial
          </button>
        <p className="agreement-text">
          By clicking the button, you are agreeing to our{" "}
          <a href="">Terms and Services</a>
        </p>
        </form>
      </section>
    </main>
  );
}

export default App;
