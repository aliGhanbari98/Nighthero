import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: `100vh`,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    // '& > *:not(:first-child)': {
    //   width: '100%',
    //   maxWidth: 720,
    // },
    '& > .profileContainer': {
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      width: ({ desktopMode }) => (desktopMode ? 350 : '100%'),
      zIndex: 1000,
    },
  },
}))
