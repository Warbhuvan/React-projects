import React from "react";

const List = (props) => {
  const person = props.people;
  return (
    <article className="person">
      <img src={person.image} alt="" className="imageDiv" />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </article>
  );
};

export default List;
