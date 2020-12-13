import React from "react";

const Results = ({ results }) => {
  return (
    <ul>
      {results &&
        results.map((items) => (
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
  );
};

export default Results;
