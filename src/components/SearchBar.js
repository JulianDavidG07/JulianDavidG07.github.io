import React, { useState } from "react";
/* Import Hook useState for handle the searching state */

import { TextField } from "@material-ui/core";

export default ({ onSubmit }) => {

  /* hook is initialized as an empty string */
  const [searchTerm, setSearchTerm] = useState("");
 
  /* Handle pointer funtion for handleChange always listening to setSearchTerm */
  const handleChange = (event) => setSearchTerm(event.target.value);

  /* Search engine event that reacts to the "enter" given by a user */
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  /* SearchBar component to enter a search term */
  return (
      <TextField
        id="standard-basic"
        fullWidth
        label="Search Artist, Song, Lyrics..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
  );
}
