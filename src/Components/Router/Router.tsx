import { Route, Routes } from 'react-router-dom';
import { PageTwo } from '../../pages/PageTwo';
import { PageThree } from '../../pages/PageThree';
// import { App } from '../../App';
import { Home } from '../../pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagetwo" element={<PageTwo />} />
      <Route path="pagethree" element={<PageThree />} />
    </Routes>
  );
}
