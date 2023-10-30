import React, { Suspense } from 'react';
import { Box } from '@mui/system';
import { Outlet } from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import { CircularProgress } from '@mui/material';

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
