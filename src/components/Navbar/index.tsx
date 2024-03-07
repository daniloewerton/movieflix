import { NavLink } from 'react-router-dom';
import './styles.css';
import ExitButton from './ExitButton';
import { useEffect, useState } from 'react';
import { getTokenData, isAuthenticated } from 'util/authentication';
import { AuthData } from 'types/AuthData';

export default function Navbar() {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    };
  }, []);

  return (
    <div className="bg-primary navbar">
      <div className="logo-container">
        <NavLink to="/">
          <h1>MovieFlix</h1>
        </NavLink>
      </div>
      <div>{authData.authenticated ? <ExitButton /> : <></>}</div>
    </div>
  );
}
