import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-direction: column;
  max-width: 900px;
  width: 100%auto;
  margin: 20px auto;
`;

const Search = ({ searchTerm, handleChange }) => {
  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </StyledSearch>
  );
};

export default Search;
