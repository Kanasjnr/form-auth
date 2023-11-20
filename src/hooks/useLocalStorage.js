import { useState, useEffect } from "react";

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
};

export default useLocalStorage;
