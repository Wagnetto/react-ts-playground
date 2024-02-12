import { NavLink } from 'react-router-dom';
import { Button } from '../components/Button';

export function PageTwo() {
  return (
    <>
      <h1>This is Page Two</h1>
      <nav>
        <NavLink to={'/'}>
          <Button variant="danger" buttonText="Home"></Button>
        </NavLink>
        <NavLink to={'/pagethree'}>
          <Button variant="primary" buttonText="Page three"></Button>
        </NavLink>
      </nav>
    </>
  );
}
