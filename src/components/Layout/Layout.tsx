import React, { Suspense } from 'react';
import { Box } from '@mui/system';
import { Outlet } from 'react-router';

import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import Loader from 'components/common/Loader';

const Layout = () => {
  return (
    <>
      <Header />

      <Box component="main">
        <Suspense fallback={<Loader isLoading={true} />}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </>
  );
};

export default Layout;
