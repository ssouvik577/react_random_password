import * as React from 'react';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function SwitchLabel({defaultChecked, onChange}) {
  return (
    <div>
      <Switch defaultChecked={defaultChecked} onChange={onChange} size="small"/>
    </div>
  )
}

export default SwitchLabel 