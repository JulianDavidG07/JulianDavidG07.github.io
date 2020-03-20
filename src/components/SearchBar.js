import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

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
