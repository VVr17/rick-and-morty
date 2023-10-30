import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <header>This is shared header</header>

      <main>
        <Suspense fallback={<p>....loading</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>This is shared footer</footer>
    </>
  );
};

export default Layout;
