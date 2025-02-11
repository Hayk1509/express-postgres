import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';

import { Logo as IllustratioanLogo } from '../../assets/auth-illustration';
import { Logo } from '../../components/Logo';
import React from 'react';
import { StyledLayoutWrapper } from './style';

// TODO: Change subtitle text
interface LayoutProps  { 
    children: React.ReactNode
 }
 
 const Layout = (props :LayoutProps) => {
const { children } = props;
  return (
    <StyledLayoutWrapper>
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32
              }}
            >
              <Logo />
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1
              }}
              variant="h1"
            >
              Welcome to{' '}
              <Box
                component="a"
                sx={{ color: '#15B79E' }}
                target="_blank"
              >
                Devias Kit
              </Box>
            </Typography>
            <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="subtitle1"
            >
              A professional kit that comes with ready-to-use MUI components.
            </Typography>
           <IllustratioanLogo/>
          </Box>
        </Grid>
      </Grid>
    </StyledLayoutWrapper>
  );
};

export default Layout