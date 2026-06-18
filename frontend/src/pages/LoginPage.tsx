import { useNavigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import NavBar from "../components/NavBar"
import Page from "../components/Page"
import useAuth from "../hooks/useAuth"

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate("/");
  }

  return (
    <Page>
      <div className="relative min-h-screen">
        <div className="absolute top-15 w-full">
          <NavBar showMenu={false} />
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <LoginForm />
        </div>
      </div>
    </Page>
  )
}

export default LoginPage