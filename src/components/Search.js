import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-direction: row;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  input {
    height: 30px;
    width: 100%;
  }
  button {
    margin: 0 10px;
    background-color: #333333;
    border-radius: 5px;
    color: #ffffff;
    padding: 10px;
    width: 100px;
  }
`;

const Search = ({ searchTerm, setSearchTerm, handleChange }) => {
  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Search for Resources"
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          setSearchTerm("");
        }}
      >
        CLEAR
      </button>
    </StyledSearch>
  );
};

export default Search;
