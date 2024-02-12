import { Route, Routes } from 'react-router-dom';
import { PageTwo } from '../../pages/PageTwo';
import { PageThree } from '../../pages/PageThree';
import { Home } from '../../pages/Home';
import { DefaultLayout } from '../DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="pagethree" element={<PageThree />} />
      </Route>
    </Routes>
  );
}
