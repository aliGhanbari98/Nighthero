import useStyle from './style'

const Button = ({
  label,
  onClick,
  className,
  color,
  textColor,
  backgroundColor,
  hollow,
  disabled,
  ...props
}) => {
  const classes = useStyle({ color, hollow, textColor, backgroundColor })

  return (
    <button disabled={disabled} onClick={onClick} className={classes.button}>
      {label}
    </button>
  )
}

export default Button
