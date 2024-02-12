import { NavLink } from 'react-router-dom';
import { Button } from '../components/Button';

export function PageThree() {
  return (
    <>
      <h1>This is Page Three</h1>
      <nav>
        <NavLink to={'/'}>
          <Button variant="danger" buttonText="Home"></Button>
        </NavLink>
        <NavLink to={'/pagetwo'}>
          <Button variant="primary" buttonText="Page two"></Button>
        </NavLink>
      </nav>
    </>
  );
}
