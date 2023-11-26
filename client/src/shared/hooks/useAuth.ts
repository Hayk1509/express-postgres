import { useEffect, useState } from "react";

import { getDataFromLocalStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(true);
  const userToken = getDataFromLocalStorage("authorization");
  useEffect(() => {
    setAuthenticated(!!userToken);
  }, [userToken]);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
};

export default useAuth;
