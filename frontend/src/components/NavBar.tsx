import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ showMenu }: { showMenu: boolean }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/user");
  };

  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4" onClick={handleHomeClick}>
        <h1 className="text-2xl logo-font">subtext</h1>
      </div>

      {/* Menu Bar */}
      {showMenu && (
        <div className="card card-xs bg-base-100 shadow-2xl w-auto rounded-full">
          <div className="card-body flex flex-row">
            {/* Home Button */}
            <button className="btn btn-circle" onClick={handleHomeClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </button>

            {/* Login Button */}
            {loggedIn && <div>
              <button
                className="btn btn-md btn-primary rounded-full"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </div>}

            {/* Profile */}
            {loggedIn && <div className="avatar avatar-placeholder" onClick={handleProfileClick}>
              <div className="bg-base-200 text-neutral w-10 rounded-full">
                <span className="text-lg">D</span>
              </div>
            </div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
