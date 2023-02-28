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
    overflowY: 'auto',
    paddingBottom: 80,
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
      ' & > .top': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        padding: '5px 15px',
        position: 'relative',
        '& > span': {
          padding: '5px 0',
          fontSize: 16,
          fontWeight: 'bold',
        },
        '& > .offer': {
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
          borderRadius: 10,
          padding: 10,
          marginTop: 5,
          maxWidth: 220,
          border: `2px solid ${theme.palette.secondary.main}`,
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
          },
        },
        '& > .details': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
          borderRadius: 10,
          marginTop: 10,
          border: `2px solid ${theme.palette.secondary.main}`,
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
      },
      '& > .gift': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 10,
        '& > div': {
          width: 'fit-content',
        },
        '& > .left': {
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          '& > .price': {
            color: theme.palette.ui.green,
            paddingLeft: 5,
          },
        },
      },
      '& > .methods': {
        width: '100%',
        padding: 10,
        marginTop: 20,
        '& > .title': {
          fontSize: 20,
          fontWeight: 'bold',
        },
        '& > .items': {
          display: 'flex',
          paddingTop: 10,
          '& > img': {
            maxHeight: 50,
            borderRadius: 7,
            cursor: 'pointer',
          },
          '& >:not(:first-child)': {
            marginLeft: 10,
          },
          '& > .selected': {
            border: `2px solid ${theme.palette.secondary.main}`,
          },
        },
      },
      '& > .cardData': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        '& > div': {
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 5,
          '& > input': {
            height: 56,
            borderRadius: 5,
            border: 'none',
            boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
            padding: 10,
          },
          '& > .cardNumber': {
            width: '66%',
          },
          '& > .cvv': {
            width: '25%',
          },
          '& > .cardHolder': {
            width: '100%',
            textAlign: 'center',
          },
        },
        '& > .selects': {
          '& > :first-child': {
            width: '66% !important',
          },
          '& > :last-child': {
            width: '30% !important',
          },
        },
      },
    },

    '& > .footerButtonContainer': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      bottom: 0,
      left: 0,
      paddingBottom: 20,
      backgroundColor: 'white',
      '& > button': {
        width: 140,
        backgroundColor: theme.palette.secondary.main,
        fontSize: 18,
      },
    },
  },
}))
