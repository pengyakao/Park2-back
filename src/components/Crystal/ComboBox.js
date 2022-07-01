import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="搜尋申請編號" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'A20220630001', year: 1994 },
  { label: 'A20220630002', year: 1972 },
  { label: 'B20220630003', year: 1974 },
  { label: 'B20220630004', year: 2008 },
  { label: 'A20220630005', year: 1957 },
  { label: 'A20220630006', year: 1993 },
  { label: 'A20220630007', year: 1993 },
  { label: 'A20220630008', year: 1993 },
  { label: 'A20220630009', year: 1993 },
  { label: 'A20220630010', year: 1993 },
  { label: 'A20220630011', year: 1993 },
  { label: 'A20220630012', year: 1993 },
  { label: 'A20220630013', year: 1993 },
];
