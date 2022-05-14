import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Category = ({ category, setCategory }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setTimeout(() => {}, 100);
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: "block" }} onClick={handleOpen}></Button>
      <FormControl sx={{ m: 0, minWidth: 50 }} focused label="Category">
        <InputLabel style={{ color: "var(--brown)" }}>Categories</InputLabel>
        <Select
          style={{ color:"var(--brown)" }}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"author"}>Author</MenuItem>
          <MenuItem value={"title"}>Title</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Category;
