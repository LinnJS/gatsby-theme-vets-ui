/** @jsx jsx */
import React from 'react';
import { jsx } from "theme-ui"
import { Link } from 'gatsby';
import HeaderLogo from '../../assets/header-logo.png'
import Button from './Button';

export const Header = props => (
  <header
    sx={{
      // these use values from `theme.colors`
      color: "secondary",
      backgroundColor: "primaryDarkest",
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      borderBottom: '8px solid',
      borderBottomColor: 'goldLight',
      'section' : {
        padding: '30px 20px',
        maxWidth: '1000px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        img: {
          width: '265px',
          height: '60px',
        }
      },
    }}

  >
    <section>
      <Link to='/'>
        <img src={HeaderLogo} alt="VSA Logo"/>
      </Link>
      <Button variant='secondary'>
        Back
      </Button>
    </section>
  </header>
);

export default Header
