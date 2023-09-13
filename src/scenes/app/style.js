import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: `100vh`,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    //'& > *:not(:first-child)': {
    //  width: '100%',
    //  maxWidth: 720,
    //},
    '& > .profileContainer': {
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      width: ({ desktopMode, profileIsOpen }) =>
        desktopMode ? (profileIsOpen ? 350 : 0) : '100%',
      zIndex: 1000,
      transition: 'width 0.3s ease, opacity 0.3s ease',
      opacity: ({ profileIsOpen }) => (profileIsOpen ? 1 : 0),
      pointerEvents: ({ profileIsOpen }) => (profileIsOpen ? 'auto' : 'none'),
    },
    '& .profileContainer.open': {
      width: ({ desktopMode }) => (desktopMode ? 350 : '100%'),
      opacity: 1,
      pointerEvents: 'auto',
    },
    '& .profileContainer.closed': {
      width: 0,
      opacity: 0,
      pointerEvents: 'none',
    },
  },
}))
