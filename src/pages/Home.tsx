import { NavLink } from 'react-router-dom';
import { Button } from '../components/Button';

export function Home() {
  return (
    <>
      <h1>This is Home</h1>
      <nav>
        <NavLink to={'/pagetwo'}>
          <Button variant="primary" buttonText="Page two"></Button>
        </NavLink>
        <NavLink to={'/pagethree'}>
          <Button variant="primary" buttonText="Page three"></Button>
        </NavLink>
      </nav>
    </>
  );
}
