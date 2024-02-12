import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <div>
      <h1>Hello Router</h1>
      <Outlet />
    </div>
  );
}
