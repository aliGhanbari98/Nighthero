import clsx from 'clsx'
import { useCallback } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useStyle } from './style'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 0
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const usePlaceholderStyles = makeStyles(theme => ({
  placeholder: {
    color: 'black',
  },
}))

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles()
  return <div className={classes.placeholder}>{children}</div>
}

const MySelect = ({
  value,
  hasError,
  className,
  onChange,
  options = [],
  label = '',
  id = 'selectId',
  multiple,
  placeholder,
}) => {
  const classes = useStyle({ hasError })

  const handleChange = useCallback(
    event => {
      onChange(event.target.value)
    },
    [onChange],
  )

  return (
    <FormControl className={classes.root} fullWidth>
      <span>{label}</span>
      <Select
        id={id}
        value={value || ''}
        label={label}
        className={clsx(className, classes.select)}
        onChange={handleChange}
        multiple={multiple}
        MenuProps={MenuProps}
        input={<OutlinedInput placeholder={placeholder} label="Name" />}
        // renderInput={params => (
        //   <TextField {...params} placeholder="here" variant="standard" />
        // )}
        displayEmpty
        renderValue={
          value !== '' ? undefined : () => <Placeholder>Answer</Placeholder>
        }
      >
        {options.map(({ key, value }) => (
          <MenuItem key={value} value={value}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MySelect
