import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    '& > .headerContainer': {
      position: 'relative',
      width: '100%',
      '& > .buttonContainer': {
        position: 'fixed',
        top: 10,
        left: 10,
        zIndex: 1000,
        '& > .closeButtonContainer': {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '50%',
          padding: 7,
          // position: 'absolute',
          // top: 10,
          // left: 10,
          opacity: 0.5,
          cursor: 'pointer',
          '& > img': {
            maxHeight: 20,
          },
          zIndex: 100,
        },
      },
      '& > .photoContainer': {
        position: 'relative',
        width: '100%',
        transition: 'opacity 0.5s, color 0.5s',
        opacity: 1,
        // '& > .closeButtonContainer': {
        //   display: 'flex',
        //   alignItems: 'center',
        //   backgroundColor: theme.palette.secondary.main,
        //   borderRadius: '50%',
        //   padding: 7,
        //   position: 'absolute',
        //   top: 10,
        //   left: 10,
        //   opacity: 0.5,
        //   cursor: 'pointer',
        //   '& > img': {
        //     maxHeight: 20,
        //   },
        //   zIndex: 100,
        // },
        '& > img': {
          width: '100%',
          maxHeight: 300,
        },
        '& > .infoContainer': {
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          '& > h2': {
            color: 'white',
            textAlign: 'center',
            margin: 0,
          },
          '& > span': {
            color: 'white',
            textAlign: 'center',
            paddingTop: 10,
          },
        },
      },

      '& > .fixedHeaderContaienr': {
        height: 80,
        width: '100%',
        position: 'fixed',
        top: 0,
        opacity: 0,
        transition: 'opacity 0.5s, color 0.5s',
        backgroundColor: 'white',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
      },

      '& > .fixedHeader_visible': {
        opacity: 1,
      },

      '& > .photoContainer_hidden': {
        opacity: 0,
      },
    },

    '& > .body': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 20,
      paddingTop: 0,
      '& >*:not(:last-child)': {
        borderBottom: '1px solid grey',
      },
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingBottom: 20,
    '& > img': {
      maxHeight: 150,
      minHeight: 150,
      maxWidth: 110,
      minWidth: 110,
      marginTop: 20,
      borderRadius: 10,
    },
    '& > h2': {
      width: '100%',
      margin: 0,
    },
    '& > span': {
      width: '100%',
      paddingTop: 10,
      fontSize: 18,
    },
  },
}))
