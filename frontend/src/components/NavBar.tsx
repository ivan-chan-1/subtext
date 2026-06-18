import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { supabase } from "../supabase";
import toast from "react-hot-toast";

const NavBar = ({ className = "", showMenu }: { className?: string, showMenu: boolean }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleBookMarkClick = () => {
    navigate("/user");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    toast.promise(async () => {
      const { error } = await supabase.auth.signOut({ scope: 'local' });
      if (error) {
        throw error;
      } else {
        navigate("/");
      }
      },
      {
        loading: 'Signing Out',
        error: (e) => `Error: ${e}`
      }
    );
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
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
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </button>

            {/* Login Button */}
            {!user && <div>
              <button
                className="btn btn-md btn-primary rounded-full"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </div>}

            {/* Logout Button */}
            {user && <div>
              <button
                className="btn btn-md rounded-full px-3 font-medium"
                onClick={handleBookMarkClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                Bookmarks
              </button>
            </div>}

            {/* Logout Button */}
            {user && <div>
              <button className="btn btn-md rounded-full px-3 font-medium" onClick={handleLogoutClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                Logout
              </button>
            </div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
