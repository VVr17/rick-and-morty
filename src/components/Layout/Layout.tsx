import React, { Suspense } from 'react';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import { Outlet } from 'react-router';

import Header from 'components/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />

      <Box component="main">
        <Suspense fallback={<CircularProgress color="success" />}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </>
  );
};

export default Layout;
