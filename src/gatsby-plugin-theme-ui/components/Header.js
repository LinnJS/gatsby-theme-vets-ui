/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import HeaderLogo from '../../assets/header-logo.png';

export const Header = props => (
  <header
    sx={{
      // these use values from `theme.colors`
      color: 'secondary',
      backgroundColor: 'primaryDarkest',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      borderBottom: '8px solid',
      borderBottomColor: 'goldLight',
      section: {
        padding: '30px 20px',
        maxWidth: '1000px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        img: {
          width: '265px',
          height: '60px',
        },
      },
    }}
  >
    <section>
        <img src={HeaderLogo} alt="VSA Logo" />
      <aside>{props.children}</aside>
    </section>
  </header>
);

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
