import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // TODO
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://i.cbc.ca/1.6128145.1628713609!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/regina-john-doe.jpg",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
