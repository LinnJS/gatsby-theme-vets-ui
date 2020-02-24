/** @jsx jsx */
import React from "react"
import { Container, ThemeProvider, jsx } from "theme-ui"
import theme from '../../theme';

const Page = (props) => {
  console.log('page props: ', props);
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container>{props.children}</Container>
      </main>
    </ThemeProvider>
  )
};

export default Page
