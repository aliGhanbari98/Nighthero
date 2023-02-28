import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    position: 'relative',
    overflow: 'hidden',
    '& > .closeButton': {
      position: 'absolute',
      top: 10,
      left: 10,
      maxHeight: 30,
      zIndex: 100,
    },
    '& > .sliderContainer': {
      width: '100%',
      '& > img': {
        minWidth: '100%',
        maxHeight: 350,
      },
    },
  },
}))
