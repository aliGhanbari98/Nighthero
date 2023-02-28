import clsx from 'clsx'
import TextField from '@mui/material/TextField'

import { useStyle } from './style'

const TextFieldV2 = ({
  placeholder = '',
  id = '',
  size = 'small',
  value,
  type = '',
  label = '',
  hasError,
  className,
  onChange,
}) => {
  const classes = useStyle({ hasError })

  return (
    <TextField
      id={id}
      label={label}
      type={type}
      classes={{
        root: clsx(className, classes.root),
      }}
      onChange={onChange}
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
      size={size}
      color="primary"
      placeholder="here"
    />
  )
}

export default TextFieldV2
