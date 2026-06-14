import { useState } from "react";

const LoginForm = () => {
  const [newUser, setNewUser] = useState<boolean>(false);
  const handleNewUserClick = () => {
    setNewUser(!newUser);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body flex flex-col">
        <h1 className="text-xl font-medium mb-4">{newUser ? "Create an Account": "Login"}</h1>
        <form className="fieldset bg-base-100 w-full p-0">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input validator w-full"
              placeholder="your@email.com"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>

          <label className="fieldset">
            <span className="label">Password</span>
            <input
              type="password"
              className="input validator w-full"
              placeholder="Password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <span className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </span>
          </label>

          <button className="btn btn-primary mt-4" type="submit">
            {newUser ? "Create": "Login"}
          </button>
        </form>
        <div className="flex gap-1 mt-4">
          <span className="text-base-content opacity-60">
            {newUser ? "Have an account?" : "New to subtext?"}
          </span>
          <a className="link link-neutral" onClick={handleNewUserClick}>{newUser ? "Log in" : "Create an account"}</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
