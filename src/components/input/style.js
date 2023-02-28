import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  input: {
    width: '100%',
    height: 35,
    border: 'none',
    borderRadius: 10,
    borderColor: ({ hasError }) =>
      hasError ? theme.palette.ui.red : theme.palette.primary.main,
    backgroundColor: ({ backgroundColor }) => backgroundColor || 'white',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
    padding: 10,
    '&:focus': {
      outlineColor: theme.palette.secondary.main,
    },
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    height: 35,
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
    '& > img': {
      maxHeight: 20,
      pointer: 'cursor',
    },
    '& > input': {
      height: '100%',
      border: 'none',
      borderRadius: 10,
      flex: 1,
      marginRight: 5,
      borderColor: ({ hasError }) =>
        hasError ? theme.palette.ui.red : theme.palette.primary.main,
      backgroundColor: ({ backgroundColor }) => backgroundColor || 'white',
      padding: 10,
      '&:focus': {
        outlineColor: theme.palette.secondary.main,
      },
    },
  },
}))
