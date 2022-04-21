import React from "react";
import { useNavigate } from "react-router-dom";
import {
  loginWithEmail,
  registerWithEmail,
  logout as logoutApi,
} from "../apis/user";

const authContext = React.createContext();
export const AuthProvider = authContext.Provider;
export const useAuth = () => React.useContext(authContext);

function Auth({ children }) {
  const [user, setUser] = React.useState();
  const [userLoading, setUserLoading] = React.useState(false);
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    setUserLoading(true);
    try {
      const res = await loginWithEmail({ email, password });
      setUser(res);
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setUserLoading(false);
    }
  };

  const register = async ({ email, password }) => {
    setUserLoading(true);
    try {
      const res = await registerWithEmail({ email, password });
      setUser(res);
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setUserLoading(false);
    }
  };

  const logout = async () => {
    setUserLoading(true);
    try {
      await logoutApi();
      setUser(undefined);
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setUserLoading(false);
    }
  };

  return (
    <AuthProvider value={{ login, register, user, userLoading, logout }}>
      {children}
    </AuthProvider>
  );
}

export default Auth;
