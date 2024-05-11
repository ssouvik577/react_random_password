import DialogBox from './components/DialogBox'
import { useCallback, useEffect, useState } from 'react'
import NewButton from './components/NewButton'
import OpenToast from './components/OpenToast'
import { Slider } from '@mui/material'
import SwitchLabel from './components/SwitchLabel'


function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [isCharacter, setisCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const [openDialog, setOpenDialog] = useState(false)
  const [openToast, setOpenToast] = useState(false)
  const [toastMessage, setToastMesssage] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // if numberAllowed, i.e. true, add numbers with existing string
    if (numberAllowed) {
      str += "0123456789"
    }

    // if isCharacter, i.e. true, add special characters with existing string
    if (isCharacter) {
      str += "!@#$%^&*()_+-=[]{}\\|;:,<.>/?"
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, isCharacter, setPassword])

  const copyToClipboard = () => {
    if (password.length < 8 && password.length != 0) {
      console.log(`length ${length}`);
      setOpenDialog(true);
    } else if (password.length == 0) {
      setOpenToast(true);
      setToastMesssage("No password generated");
    }
    else {
      setOpenDialog(false);
      navigator.clipboard.writeText(password);
      setOpenToast(true);
      setToastMesssage("Password copied successfully");
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const copyAnyway = () => {
    setOpenDialog(false)
    navigator.clipboard.writeText(password);
    setOpenToast(true);
    setToastMesssage("Password copied successfully");

  };

  const handleToastClose = () => {
    setOpenToast(false);
  }

  useEffect(() => { passwordGenerator() }, [length, numberAllowed, isCharacter, passwordGenerator])
  return (

    <div className='w-full max-w-md mx-auto rounded-lg px-2 py-4 my-8 text-orange-400 bg-gray-500' >
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <h3 className='text-center'>Drag slider to create unique password</h3>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password} className='outline-none w-full px-1 py-3' placeholder='password' readOnly />
        <NewButton buttonText='Copy' onClick={copyToClipboard} />
        <DialogBox isOpen={openDialog} isHandleClose={handleCloseDialog} passLength={password.length} copyAnyway={copyAnyway} buttonText2='Modify' buttonText1='Copy anyway' dialogText='Password length should be 8 character' />
        <OpenToast isOpen={openToast} isOnClick={setOpenToast} isHandleClose={handleToastClose} toastMessage={toastMessage}/>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={0} max={36} value={length} className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        Numbers
          <SwitchLabel 
            defaultChecked={numberAllowed}
            onChange={() => {
              setnumberAllowed((prev) => !prev)}} />
        </div>
        <div className="flex items-center gap-x-1">
          Character
          <SwitchLabel 
            defaultChecked={isCharacter}
            onChange={() => {
              setisCharacter((prev) => !prev)}} />
        </div>
      </div>

    </div>
  )
}

export default App
