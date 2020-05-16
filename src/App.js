import React, { useState, useEffect } from "react";
import "./styles.css";

export default props => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        setItems(json);
        setIsLoaded(true);
      });
  });

  const apiReturn = () => {
    if (isLoaded) {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>Loading....</div>;
    }
  };

  return apiReturn();
};
