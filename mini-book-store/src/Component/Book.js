import React from "react";
import Author from "./Author";
import Image from "./Image";
import Title from "./Title";
import '../style.css'
function Book() {
  return (
    <article className="Book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  );
}

export default Book;
