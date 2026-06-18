import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"

const ProtectedRoute = ({ children, auth = false, redirectTo = "/" }: { children: React.ReactNode; auth?: boolean; redirectTo?: string }) => {
  const { user } = useAuth();

  if (auth && user) return <Navigate to={redirectTo} replace />;
  if (!auth && !user) return <Navigate to="/login" replace />;

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute