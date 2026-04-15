import { useNavigate } from "react-router-dom"

const Button = () => {
  const navigate = useNavigate();
  return (
    <button className="btn btn-circle" onClick={() => navigate("/transcript")}>
      Go
    </button>
  )
}

export default Button