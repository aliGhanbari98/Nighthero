import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',

    '& > .photoContainer': {
      position: 'relative',
      width: '100%',
      '& > .closeButtonContainer': {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
        position: 'absolute',
        top: 10,
        left: 10,
        opacity: 0.5,
        zIndex: 100,
        cursor: 'pointer',
      },
      '& > img': {
        width: '100%',
        maxHeight: 260,
        minHeight: 260,
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
    '& > .body': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      padding: '30px 20px',
      paddingTop: 10,
      position: 'relative',
      '& > span': {
        padding: '5px 0',
        fontSize: 16,
        fontWeight: 'bold',
      },
      '& > .itemsContainer': {
        width: '100%',
        '& > .item': {
          width: '100%',
          padding: 10,
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
          borderRadius: 10,
          marginTop: 15,
          position: 'relative',
          cursor: 'pointer',
        },
        '& > .total': {
          '& > .text': {
            fontWeight: 'bold',
          },
          '& > .percentage': {
            color: '#26D412',
            position: 'absolute',
            top: 5,
            right: 10,
            fontSize: 14,
          },
          '& > img': {
            maxHeight: 25,
            minHeight: 25,
            position: 'absolute',
            top: -10,
            right: -10,
          },
        },
        '& > .selected': {
          border: `2px solid ${theme.palette.secondary.main}`,
        },
      },
    },
    '& > .buttonContainer': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 20,
      '& > button': {
        width: 160,
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
}))
