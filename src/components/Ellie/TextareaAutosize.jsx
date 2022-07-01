import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function EmptyTextarea() {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="字數限制300字"
      style={{ width: 975, height: 300 }}
      showCount
      maxLength={300}
    />
  );
}
