import { useState } from "react";
import type { LoginFormData } from "../types";
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [newUser, setNewUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({email: "", password: ""});

  const navigate = useNavigate();

  const handleNewUserClick = () => {
    setFormData({email: "", password: ""});
    setNewUser(!newUser);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = newUser
      ? await supabase.auth.signUp(formData)
      : await supabase.auth.signInWithPassword(formData);
    
    setLoading(false);

    if (error) {
      toast.error(error.message);
      setFormData({email: "", password: ""});
    } else {
      navigate("/user");
    }
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body flex flex-col">
        <h1 className="text-xl font-medium mb-4">{newUser ? "Create an Account": "Login"}</h1>
        <form className="fieldset bg-base-100 w-full p-0" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input validator w-full"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>

          <label className="fieldset">
            <span className="label">Password</span>
            {newUser ? 
              <>
                <input
                  name="password"
                  type="password"
                  className="input validator w-full"
                  placeholder="Password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  value={formData.password}
                  onChange={handleChange}
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
              </>
              :
              <>
                <input
                  name="password"
                  type="password"
                  className="input validator w-full"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <p className="validator-hint hidden">Required</p>
              </>
            }
          </label>

          <button className="btn btn-primary mt-4" type="submit">
            {loading ? 
            <span className="loading loading-spinner loading-xs" />
            : newUser ? "Create": "Login"}
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
