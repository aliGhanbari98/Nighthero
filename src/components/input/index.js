import { useStyle } from './style'

const TextFieldV2 = ({
  value,
  type = '',
  hasError,
  onChange,
  placeholder,
  backgroundColor,
  icon,
  onIconClick,
}) => {
  const classes = useStyle({ hasError, backgroundColor })

  return !icon ? (
    <input
      type={type}
      className={classes.input}
      onChange={e => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  ) : (
    <div className={classes.inputContainer}>
      <img onClick={onIconClick} alt="icon" src={icon} />
      <input
        type={type}
        onChange={e => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextFieldV2
