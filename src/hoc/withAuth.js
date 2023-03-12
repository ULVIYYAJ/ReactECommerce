import { useAuth } from "../customHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WithAuth = (props) => {
  const navigate = useNavigate();
  const currentUser = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return currentUser ? props.children : null;
};

export default WithAuth;


