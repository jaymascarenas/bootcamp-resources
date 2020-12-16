import React from "react";
import styled from "styled-components";

const StyledResults = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
  margin: 20px auto;
  .card {
    color: #ffffff;
    width: 30%;
    border-radius: 5px;
    background-color: #2fabff;
    padding: 10px;
    margin: 10px;
  }
  a {
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 1;
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
`;

const Results = ({ results }) => {
  return (
    <StyledResults>
      {results.length > 0 &&
        results.map((items) => (
          <h4 className="card" key={items.title}>
            <strong>{items.title}</strong> - Week {items.week} Day {items.day}
            <div>
              {items.links &&
                items.links.map((link) => (
                  <p key={link}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {link}
                    </a>
                  </p>
                ))}
            </div>
          </h4>
        ))}
    </StyledResults>
  );
};

export default Results;
