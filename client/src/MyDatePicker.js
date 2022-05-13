import * as React from 'react';


export default function MyDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <input type="date" onChange={(e) => {setValue(e.target.value)}}></input>
  );
}