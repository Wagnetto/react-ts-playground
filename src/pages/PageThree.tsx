import { Link } from 'react-router-dom';
import { Button } from '../Components/Button/Button';

export function PageThree() {
  return (
    <>
      <h1>This is Page Three</h1>
      <Link to={'/'}>
        <Button variant="danger" buttonText="Home"></Button>
      </Link>
      <Link to={'/pagetwo'}>
        <Button variant="primary" buttonText="Page two"></Button>
      </Link>
    </>
  );
}
