import { useStyle } from './style'
import Switch from '@mui/material/Switch'

const muiLabel = { inputProps: { 'aria-label': 'Switch demo' } }

const MySwitch = ({ value, onChange, label = '' }) => {
  const classes = useStyle()

  return (
    <div className={classes.container} fullWidth>
      <span className="myLabel">{label}</span>
      <Switch checked={value} onChange={onChange} {...muiLabel} />
    </div>
  )
}

export default MySwitch
