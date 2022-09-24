// Style
import { FunctionComponent, useState, FormEvent } from "react";
import "./index.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    // If you want to do something with form submit
    e.preventDefault();
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-5">
      <form onSubmit={onSubmit} className="form">
        <div className="form-content">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              name="email"
              onChange={(event) => setEmail(event.currentTarget.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              name="password"
              onChange={(event) => setPassword(event.currentTarget.value)}
              value={password}
            />
          </div>
          <button className="form-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Task5;
