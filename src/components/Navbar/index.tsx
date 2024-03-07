import { NavLink } from 'react-router-dom';
import './styles.css';
import ExitButton from './ExitButton';
import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from 'util/authentication';
import { AuthContext } from 'AuthContext';

export default function Navbar() {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, []);

  return (
    <div className="bg-primary navbar">
      <div className="logo-container">
        <NavLink to="/">
          <h1>MovieFlix</h1>
        </NavLink>
      </div>
      <div>{authContextData.authenticated ? <ExitButton /> : <></>}</div>
    </div>
  );
}
