import { useNavigate } from "react-router-dom"

const Button = () => {
  const navigate = useNavigate();
  return (
    <button className="btn" onClick={() => navigate("/transcript")}>
      Go
    </button>
  )
}

export default Button