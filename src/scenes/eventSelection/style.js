import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  '@keyframes focus': {
    from: {
      transform: 'scale(0.90)',
    },
    to: {
      transform: 'scale(1.05)',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    '& > .header': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 15px',
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.7,
      '& > .left': {
        display: 'flex',
        alignItems: 'center',
        '& > img': {
          height: 50,
          cursor: 'pointer',
        },
      },
      '& > .right': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        flex: 1,
        height: 30,
        maxHeight: 30,
        '& > span': {
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          width: '75%',
          backgroundColor: 'white',
          borderRadius: 10,
          marginRight: 10,
          paddingLeft: 10,
          cursor: 'pointer',
        },
        '& > img': {
          maxWidth: 30,
          maxHeight: 30,
        },
      },
    },
    '& > .body': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowX: 'hidden',
      '& > .filterBar': {
        display: 'flex',
        height: 40,
        maxHeight: 50,
        margin: 15,
        padding: '10px 15px',
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: 10,
        '& > div': {
          display: 'flex',
          alignItems: 'center',
          width: '33%',
          height: 20,
          cursor: 'pointer',
          borderRadius: 5,
          '& > .iconImage': {
            height: 22,
            maxHeight: 22,
            width: 22,
            maxWidth: 22,
          },
          '& > span': {
            marginLeft: 5,
          },
          '& > .downArrowImage': {
            maxHeight: 15,
            marginLeft: 5,
          },
        },
        '& > .date': {
          backgroundColor: ({ calendarModalOpen }) =>
            calendarModalOpen ? 'lightgrey' : '',
        },
        '& > .time': {
          flex: 1,
          paddingLeft: 10,
          borderRight: `1px solid lightGrey`,
          borderLeft: `1px solid lightGrey`,
          backgroundColor: ({ timeModalOpen }) =>
            timeModalOpen ? 'lightgrey' : '',
        },
        '& > .people': {
          paddingLeft: 10,
          backgroundColor: ({ peopleModalOpen }) =>
            peopleModalOpen ? 'lightgrey' : '',
        },
      },
      '& > .eventTypesContainer': {
        display: 'flex',
        alignItems: 'center',
        height: 60,
        maxHeight: 60,
        marginTop: 20,
        paddingLeft: 15,
        width: '100%',
        '& > .filterIconContainer': {
          height: '100%',
          position: 'relative',
          '& > img': {
            maxHeight: 60,
            cursor: 'pointer',
          },
          '& > span': {
            backgroundColor: theme.palette.secondary.main,
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
            borderRadius: '50%',
            padding: '2px 8px',
            position: 'absolute',
            fontWeight: 'bold',
            top: -10,
            right: -10,
          },
        },
        '& > .itemsContainer': {
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          overflowX: 'auto',
          overflowY: 'hidden',
          padding: '0 15px',
          '& > div': {
            height: '100%',
            position: 'relative',
            marginLeft: 10,
            cursor: 'pointer',
            '& > img': {
              maxWidth: 100,
              minWidth: 100,
              maxHeight: 60,
              borderRadius: 10,
              opacity: 0.7,
            },
            '& > span': {
              position: 'absolute',
              top: 20,
              left: 17,
              color: 'white',
              fontWeight: 'bold',
            },
          },
          '& > .firstItem': {
            marginLeft: 0,
          },
        },
      },
      '& > .line': {
        width: '70%',
        content: null,
        borderBottom: '1px solid lightgrey',
        marginTop: 30,
      },
      '& > .filterTextContainer': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        '& > span': {
          fontSize: 18,
        },
      },
      '& > .foundItemsContainer': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        paddingBottom: 100,
      },
    },
  },

  foundItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0 0 15px',
    '& > .left': {
      position: 'relative',
      height: '100%',
      cursor: 'pointer',
      '& > img': {
        maxHeight: 160,
        minHeight: 160,
        maxWidth: 170,
        minWidth: 170,
        borderRadius: 7,
      },
      '& > span': {
        position: 'absolute',
        borderRadius: '0 0 7px 7px',
        bottom: 5,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        opacity: 0.7,
        padding: '5px 10px',
        fontSize: 16,
      },
    },
    '& > .right': {
      height: 161,
      // maxWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft: 10,
      flex: 1,
      overflowX: 'auto',
      '& > .nameContainer': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        '& > .name': {
          fontSize: 20,
          fontWeight: 'bold',
        },
        '& > .gift': {
          textAlign: 'center',
          backgroundColor: theme.palette.secondary.main,
          padding: '3px 12px',
          borderRadius: 7,
          fontWeight: 'bold',
          fontSize: 14,
        },
      },
      '& > .infoContainer': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        '& > .address': {
          display: 'flex',
          alignItems: 'center',
          fontSize: 16,
          paddingRight: 35,
        },
        '& > .price': {
          display: 'flex',
          alignItems: 'center',
          fontSize: 16,

          '& > img': {
            maxHeight: 15,
          },
        },
        '& > .rate': {
          display: 'flex',
          alignItems: 'center',
          '& > img': {
            maxHeight: 17,
          },
          '& > span': {
            fontSize: 16,
            paddingLeft: 5,
          },
        },
      },
      '& > .eventList': {
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        paddingRight: 5,
        '& > span': {
          padding: 3,
          borderRadius: 10,
          maxHeight: 30,
          minWidth: 120,
          marginLeft: 5,
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
        },
        '& > .firstItem': {
          marginLeft: 0,
          border: `1px solid ${theme.palette.secondary.main}`,
        },
      },
    },
  },

  headerModalContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    zInex: 2001,
    '& img': {
      maxHeight: 20,
      cursor: 'pointer',
    },
    '& input': {
      border: 'none',
      flex: 1,
      padding: 3,
      height: '100%',
      '&:focus': {
        outline: 'none',
      },
    },
    '& > .left': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      width: '20%',
      maxWidth: 20,
    },
    '& > .right': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      maxWidth: 250,
      '& > .searchInputContainer': {
        display: 'flex',
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        height: 40,
      },
      '& > .locationInputContainer': {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        borderRadius: 10,
      },
      '& > .local': {
        marginTop: 10,
      },
    },
  },
}))
