import React from 'react';
import PropTypes from 'prop-types';
import { Heading, ThemeProvider } from 'theme-ui';
import { Header, Container } from '@linnjs/gatsby-theme-vets-ui/src/gatsby-plugin-theme-ui';
import theme from '../../theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Heading as="h1">Gatsby Events Theme</Heading>
      </Header>
      <main>
        <Container>{children}</Container>
      </main>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
