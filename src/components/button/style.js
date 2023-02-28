import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  button: {
    width: '100%',
    minWidth: 30,
    lineHeight: 1.5,
    letterSpacing: -0.08,
    fontSize: theme.spacing(1.8),
    fontWeight: 'bold',
    padding: '3px 15px',
    border: 'none',
    color: 'black',
    borderRadius: 7,
    boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
    backgroundColor: ({ backgroundColor }) => backgroundColor || 'white',
    cursor: 'pointer',
  },
}))
