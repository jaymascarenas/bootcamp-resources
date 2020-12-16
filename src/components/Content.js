import React, { useEffect, useState } from "react";
import styled from "styled-components";
import json from "../resources.json";
import Search from "../components/Search";
import Results from "../components/Results";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  ul {
    li {
      word-wrap: break-word;
    }
  }
  ul:first-of-type {
    padding-left: 30px;
  }
`;

const Content = () => {
  const [modules, setModules] = useState([]);
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setModules(json);
    let resourceArray = [];

    json.forEach((modules) => {
      modules.resources.forEach((item) => {
        resourceArray.push(item);
      });
    });
    setResources(resourceArray);
  }, [modules]);

  const handleChange = (event) => {
    if (event.target.value !== "") {
      setSearchTerm(event.target.value);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const result = resources.filter((v) =>
        v.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(result);
    } else {
      setSearchResults([]);
    }
  }, [resources, searchTerm]);

  return (
    <StyledContent>
      <Search
        handleChange={handleChange}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <a href="/bootcamp-resources.pdf">Download PDF Version</a>
      <Results results={searchResults} />
      {modules.map((value) => (
        <div key={value.module}>
          <h2>
            {value.module} - Week {value.week}
          </h2>
          {value.resources &&
            value.resources.map((items) => (
              <div key={items.title}>
                <strong>{items.title}</strong> - Day {items.day}
                <ul>
                  {items.links &&
                    items.links.map((link) => (
                      <li key={link}>
                        <a href={link} target="_blank" rel="noreferrer">
                          {link}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          <hr />
        </div>
      ))}
    </StyledContent>
  );
};
export default Content;
