/** @jsx jsx */
import PropTypes from 'prop-types';
import { Container as StyledContainer, jsx } from 'theme-ui';

const Container = props => {
  return (
    <StyledContainer
      sx={{
        maxWidth: '1000px',
        width: '100%',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {props.children}
    </StyledContainer>
  );
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
