import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./noMatch.css";
export default function NoMatch1() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  });
  return <></>;
}
