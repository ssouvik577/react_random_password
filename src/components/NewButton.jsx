import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function NewButton({buttonText, onClick})  {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={onClick}>{buttonText}</Button>
    </Stack>
  );
}

export default NewButton