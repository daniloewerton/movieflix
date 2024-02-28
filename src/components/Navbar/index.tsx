import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Navbar() {
  return (
    <div className="bg-primary navbar">
      <div className="logo-container">
        <NavLink to="/">
          <h1>MovieFlix</h1>
        </NavLink>
      </div>
    </div>
  );
}
