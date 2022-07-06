import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">活動類別</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="活動類別"
          onChange={handleChange}
          required="true"
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
}
