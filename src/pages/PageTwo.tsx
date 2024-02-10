import { Link } from 'react-router-dom';
import { Button } from '../Components/Button/Button';

export function PageTwo() {
  return (
    <>
      <h1>This is Page Two</h1>
      <Link to={'/'}>
        <Button variant="danger" buttonText="Home"></Button>
      </Link>
      <Link to={'/pagethree'}>
        <Button variant="primary" buttonText="Page three"></Button>
      </Link>
    </>
  );
}
