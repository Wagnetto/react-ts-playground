import { Link } from 'react-router-dom';
import { Button } from '../Components/Button/Button';

export function Home() {
  return (
    <>
      <h1>Hello Router</h1>
      <Link to={'/pagetwo'}>
        <Button variant="primary" buttonText="Page two"></Button>
      </Link>
      <Link to={'/pagethree'}>
        <Button variant="primary" buttonText="Page three"></Button>
      </Link>
    </>
  );
}
