//import React, { Component } from "react";
import { useState } from "react";
import Resturant from "./Resturant";

const getfilter = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((boro) => boro.zipcode.includes(query));
};

export default function Search() {
  const [query, SetQuery] = useState("");
  const { list } = Resturant;
  const { zipcode } = lists;

  const filter = getfilter(query, items);
  return (
    <div className="App">
      <h1>Search Aspect</h1>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteritems.map((value) => (
          <h1>key={value.boro}</h1>
        ))}
      </ul>
    </div>
    //replacement data insertion
  );
}
