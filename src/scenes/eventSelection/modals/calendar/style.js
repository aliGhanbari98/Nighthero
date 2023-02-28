import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    '& > .buttonsContainer': {
      width: '100%',
      display: 'flex',
      justifyContent: 'end',
      paddingTop: 30,
      '& > button': {
        width: 100,
        backgroundColor: theme.palette.ui.green,
        color: 'white',
      },
    },
  },
}))
