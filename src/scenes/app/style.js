import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: `100vh`,
    display: 'flex',
    justifyContent: 'center',
    // '& > *:not(:first-child)': {
    //   width: '100%',
    //   maxWidth: 720,
    // },
  },
}))
