import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { removeLocalStorage } from 'util/authentication';
import { useContext } from 'react';
import { AuthContext } from 'AuthContext';

export default function ExitButton() {
  const history = useHistory();
  const { setAuthContextData } = useContext(AuthContext);
  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeLocalStorage();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <div className="main-button-container">
      <div className="exit-button-container">
        <Link className="exit-button-content" to="/" onClick={handleLogout}>
          sair
        </Link>
      </div>
    </div>
  );
}
