import React from "react"
import { Heading, Container, ThemeProvider } from "theme-ui"
import { Header } from 'gatsby-theme-vets-ui';
import theme from '../../theme';

const Layout = ({ children }) => {
  console.log('theme: ', theme);
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Heading as="h1">Gatsby Events Theme</Heading>
      </Header>
      <main>
        <Container>{children}</Container>
      </main>
    </ThemeProvider>
  )
};

export default Layout
