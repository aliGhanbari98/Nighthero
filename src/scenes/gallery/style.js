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
    // '& > .closeButton': {
    //   position: 'absolute',
    //   top: 10,
    //   left: 10,
    //   maxHeight: 30,
    //   zIndex: 100,
    // },
    '& > .closeButtonContainer': {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '50%',
      padding: 7,
      position: 'absolute',
      top: 10,
      left: 10,
      opacity: 0.5,
      cursor: 'pointer',
      '& > img': {
        maxHeight: 20,
      },
      zIndex: 100,
    },
    '& > .navigationButtonsContainer': {
      width: '100%',
      // height: 50,
      display: 'flex',
      justifyContent: ({ isFirstImage, isLastImage }) =>
        isFirstImage ? 'end' : isLastImage ? 'start' : 'space-between',
      alignItems: 'center',
      padding: 15,
      zIndex: 201,
      '& > .buttonContainer': {
        display: 'flex',
        backgroundColor: '#525250',
        borderRadius: '50%',
        padding: 8,
        opacity: 0.6,
        '& > img': {
          maxHeight: 18,
        },
        zIndex: 100,
      },
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
