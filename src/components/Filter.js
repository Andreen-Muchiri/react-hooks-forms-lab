import React, {useState} from "react";

function Filter({ onCategoryChange,onSearchChange }) {
  const[search , setSearch]= useState("");
  const[category , setCategory]=useState("");
   function handleSearchChange(event){
     onSearchChange(event.target.value);
 } 
   function handleCategoryChange(event){
  onCategoryChange(event.target.value);
 }  

  return (
    <div className="Filter">
      {/* <input type="text" name="search" placeholder="Search..." /> */}
      <input onSearchChange={handleSearchChange} type="text" value={search} name="search" placeholder="Search..."/>
      <select name="filter" onChange={onCategoryChange} value={category}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
