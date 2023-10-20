import clsx from 'clsx'
import { useCallback } from 'react'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useStyle } from './style'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const AutoComplete = ({
  value,
  hasError,
  className,
  onChange,
  options = [],
  label = '',
  id = 'selectId',
  multiple,
  disablePortal = false,
  defaultValue,
  disabled,
  placeholder,
}) => {
  const classes = useStyle({ hasError })

  const handleChange = useCallback(
    (val, reason) => {
      onChange(val, reason)
    },
    [onChange],
  )

  console.log({ value })

  return (
    <FormControl className={classes.root} fullWidth>
      <span>{label}</span>
      {/* <Select
        id={id}
        value={value || ''}
        label={label}
        className={clsx(className, classes.select)}
        onChange={handleChange}
        multiple={multiple}
        MenuProps={MenuProps}
        input={<OutlinedInput label="Name" />}
      >
        {options.map(({ key, value }) => (
          <MenuItem key={value} value={value}>
            {key}
          </MenuItem>
        ))}
      </Select> */}
      <Autocomplete
        multiple={multiple}
        disablePortal={disablePortal}
        value={value || ''}
        options={options}
        disabled={disabled}
        getOptionLabel={option => option?.key}
        defaultValue={defaultValue || ''}
        onChange={(_, val, reason, details) => handleChange(val, reason)}
        renderInput={params => (
          <TextField {...params} placeholder={placeholder} variant="standard" />
        )}
        className={clsx(className, classes.select)}
        isOptionEqualToValue={(option, value) => option.value === value}
      />
    </FormControl>
  )
}

export default AutoComplete
