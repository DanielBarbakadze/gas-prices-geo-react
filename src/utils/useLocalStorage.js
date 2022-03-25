import { useState } from "react";

// Hook
export const useLocalStorage = (key, initialValue) => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem(key);

    if (JSON.parse(item)?.expiry < new Date().getTime()) {
      window.localStorage.removeItem(key);
      // console.log("test");
    }
  }

  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value, ttl = 0) => {
    try {
      //   const valueToStore =
      //     value instanceof Function ? value(storedValue) : value;
      const valueToStore = {
        value,
      };
      if (ttl !== 0) {
        valueToStore.expiry = new Date().getTime() + ttl;
      }

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};
