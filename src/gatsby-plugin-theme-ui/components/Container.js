/** @jsx jsx */
import React from "react"
import { Container as StyledContainer, jsx} from "theme-ui"

const Container = (props) => {
  console.log('page props: ', props);
  return (
    <StyledContainer sx={{
      maxWidth: '1000px',
      width: '100%',
    }}>{props.children}</StyledContainer>
  )
};

export default Container
