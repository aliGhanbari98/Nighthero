import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
        maxHeight: 330,
        minHeight: 330,
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
      '& > .description': {
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'white',
        padding: '5px 30px',
        borderRadius: 10,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap',
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
      overflowY: 'auto',
      '& > .offerContainer': {
        width: '100%',
        position: 'relative',
        '& > .offer': {
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
          borderRadius: 10,
          padding: 10,
          marginTop: 20,
          maxWidth: 220,
          cursor: 'pointer',
          width: 'fit-content',
          '& > .top': {
            display: 'flex',
            alignItems: 'center',
            '& > .title': {
              fontSize: 17,
              fontWeight: 'bold',
              borderRight: '1px solid lightgrey',
              paddingRight: 5,
            },
            '& > .price': {
              fontSize: 16,
              fontWeight: 'bold',
              padding: '0 5px',
            },
            '& > .count': {},
          },
          '& > .bottom': {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: 'grey',
            paddingTop: 5,
            maxWidth: 170,
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
      padding: '20px 0',
      '& > button': {
        width: 130,
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  detailsCard: {
    // width: 170,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
    borderRadius: 10,
    border: `2px solid ${theme.palette.secondary.main}`,
    position: ({ hidden }) => (hidden ? '' : 'absolute'),
    left: ({ selectedOfferWidth }) => Number(selectedOfferWidth) - 5,
    top: 50,
    backgroundColor: 'white',
    opacity: ({ hidden }) => (hidden ? 0 : 1),
    height: ({ hidden }) => (hidden ? 110 : null),
    '& > div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3px 10px',
    },
    '& > .persons': {
      borderBottom: '1px solid lightgrey',
      width: 'calc(100% - 20px)',
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& > .total': {
      paddingTop: 5,
      paddingBottom: 5,
      '& > .title': {
        fontSize: 18,
        fontWeight: 'bold',
      },
      '& > .price': {
        fontSize: 18,
        color: theme.palette.secondary.main,
      },
    },
    '& > .earlyPayment': {
      '& > .title': {
        color: theme.palette.ui.green,
        maxWidth: 140,
      },
      '& > .price': {
        fontSize: 18,
        color: theme.palette.ui.green,
      },
    },
    '& > .appliedGift': {
      paddingLeft: 3,
      paddingRight: 3,
      backgroundColor: 'lightgrey',
      '& > .right': {
        '& > .price': {
          color: theme.palette.ui.green,
        },
      },
    },
    '& > .reservation': {
      fontSize: 18,
      fontWeight: 'bold',
      paddingBottom: 5,
    },
    '& > .advancePayment': {
      '& > .price': {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
  },
}))