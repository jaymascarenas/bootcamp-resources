import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #ffffff;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
        <h1>Bootcamp Resources</h1>
    </StyledHeader>
  )
}
export default Header;