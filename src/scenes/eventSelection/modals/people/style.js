import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > input': {
      borderRadius: 10,
      padding: 10,
      boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
      border: `2px solid ${theme.palette.secondary.main}`,
    },
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
