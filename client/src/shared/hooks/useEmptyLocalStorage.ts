import { useEffect } from "react";

const useEmptyLocalStorage = () => {
  useEffect(() => {
    localStorage.clear()
  }, []);
};

export default useEmptyLocalStorage;
