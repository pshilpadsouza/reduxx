import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/notes/notesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchText);
  const handleChangeText = (e) => {
    const text = e.target.value;
    dispatch(setSearchText(text));
  };
  return (
    <div>
      <input
        value={searchValue}
        onChange={handleChangeText}
        type="text"
        placeholder={"Search..."}
        className={"search-box"}
      />
    </div>
  );
};
export default Search;





/*import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { setSearchText } from "../redux/notes/notesSlice";

const Search = () => {
 
  return (
    <div>
    <input type="text"   className={"search-box"}/> 

    </div>
  );
};
export default Search;
/*
 const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchText);
  const handleChangeText = (e) => {
    const text = e.target.value;
    dispatch(setSearchText(text));
  };

   <input
        value={searchValue}
        onChange={handleChangeText}
        type="text"
        placeholder={"Search..."}
        className={"search-box"}
      />
      */