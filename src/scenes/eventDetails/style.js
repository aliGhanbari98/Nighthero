import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    paddingBottom: 80,
    '& > .photoContainer': {
      position: 'relative',
      width: '100%',
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
      '& > img': {
        width: '100%',
        minWidth: '100%',
        maxHeight: 300,
        height: 'auto',
        objectFit: 'cover',
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
      '& > .filterBar': {
        display: 'flex',
        height: 40,
        maxHeight: 50,
        margin: 15,
        padding: '10px 10px',
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: 10,
        position: 'absolute',
        bottom: -30,
        left: -5,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: '95%',
        '& > div': {
          display: 'flex',
          alignItems: 'center',
          height: 20,
          borderRadius: 10,
          padding: '0 5px',
          cursor: 'pointer',
          '& > .iconImage': {
            height: 22,
            maxHeight: 22,
            width: 22,
            maxWidth: 22,
          },
          '& > span': {
            marginLeft: 5,
          },
          '& > .greenText': {
            color: theme.palette.ui.green,
          },
          '& > .downArrowImage': {
            maxHeight: 15,
            marginLeft: 5,
          },
        },
        '& > .date': {
          backgroundColor: ({ step }) => (step === 1 ? '#d3d3d39c' : ''),
          fontWeight: ({ step }) => (step === 1 ? 'bold' : ''),
        },
        '& > .time': {
          // paddingLeft: 10,

          backgroundColor: ({ step }) => (step === 2 ? '#d3d3d39c' : ''),
          fontWeight: ({ step }) => (step === 2 ? 'bold' : ''),
        },
        '& > .people': {
          // paddingLeft: 10,
          backgroundColor: ({ step }) => (step === 3 ? '#d3d3d39c' : ''),
          fontWeight: ({ step }) => (step === 3 ? 'bold' : ''),
        },
      },
    },
    '& > .body': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 40,
      position: 'relative',
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
      '& > .calendar': {},
      '& > .time': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > .itemsContainer': {
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          '& > span': {
            display: 'flex',
            alignItems: 'center',
            padding: '5px 13px',
            borderRadius: 10,
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1)',
            marginLeft: 10,
            marginTop: 10,
            cursor: 'pointer',
          },
          '& > .selected': {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
      '& > .people': {
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
      },
      '& > .buttonContainer': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 30,
        position: 'absolute',
        bottom: -15,
        '& > button': {
          width: 100,
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
  },
}))
