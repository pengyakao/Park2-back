import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectInput = ({ act_class, setact_class }) => {
  const handleChange = (event) => {
    setact_class(event.target.value);
  };

  React.useEffect(() => {
    setact_class(act_class);
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="act_class">活動類別</InputLabel>
        <Select
          labelId="act_class"
          id="demo-simple-select"
          label="活動類別"
          required="true"
          value={act_class ?? ""}
          onChange={handleChange}
        >
          <MenuItem value={1}>現場LIVE</MenuItem>
          <MenuItem value={2}>快閃活動</MenuItem>
          <MenuItem value={3}>風格餐車</MenuItem>
          <MenuItem value={4}>商家市集</MenuItem>
          <MenuItem value={5}>創作者論壇</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
