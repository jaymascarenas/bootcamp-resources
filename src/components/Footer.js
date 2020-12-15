import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 50px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #ffffff;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} Jay Mascarenas</p>
    </StyledFooter>
  );
};
export default Footer;
