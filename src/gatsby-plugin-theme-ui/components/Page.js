/** @jsx jsx */
import { Container, ThemeProvider, jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import theme from '../../theme';

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        <Container>{props.children}</Container>
      </main>
    </ThemeProvider>
  );
};

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
