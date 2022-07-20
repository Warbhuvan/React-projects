import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const clearAll = () => {
    setPeople((prevState) => {
      return [];
    });
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        {
          people.map((person)=>{
              return  <List key={person.id} people={person}></List>
          })
        }
        <button type="button" onClick={clearAll}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
