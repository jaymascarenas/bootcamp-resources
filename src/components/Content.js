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
  max-width: 900px;
  margin: 0 auto;
  ul {
    margin-bottom: 10px;
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
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      const result = resources.filter((v) =>
        v.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(result);
      console.log(result);
    }
  }, [resources, searchTerm]);

  return (
    <StyledContent>
      <Search handleChange={handleChange} setSearchTerm={setSearchTerm} />
      <Results results={searchResults} />
      {modules.map((value) => (
        <div key={value.module}>
          <h3>
            {value.module} - Week {value.week}
          </h3>
          <ul>
            {value.resources &&
              value.resources.map((items) => (
                <li key={items.title}>
                  <strong>{items.title}</strong> - Day {items.day}
                  <ul>
                    {items.links &&
                      items.links.map((link) => (
                        <li key={link}>
                          <a href={link}>{link}</a>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
          <hr />
        </div>
      ))}
    </StyledContent>
  );
};
export default Content;
