import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    paddingBottom: 80,
    position: 'relative',
    '& > .photosContainer': {
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      maxHeight: 300,
      minHeight: 300,
      positoin: 'relative',
      '& > .photo': {
        position: 'relative',
        '& > img': {
          maxHeight: 300,
          minHeight: 300,
          maxWidth: 350,
          minWidth: 350,
          borderRadius: 10,
        },
        '& > span': {
          position: 'absolute',
          padding: 5,
          textAlign: 'center',
          bottom: 15,
          left: 10,
          borderRadius: 7,
          backgroundColor: 'white',
          opacity: 0.7,
          cursor: 'pointer',
        },
      },
      '& >*:not(:first-child)': {
        paddingLeft: 10,
      },
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
    },
    '& > .body': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: 15,
      '& > .eventContainer': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        '& > span': {
          textAlign: 'center',
          padding: 5,
          borderRadius: 7,
        },
        '& > .selected': {
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
          border: `1px solid ${theme.palette.secondary.main}`,
        },
        '& >*:not(:first-child)': {
          marginLeft: 7,
        },
      },
      '& > .nameContainer': {
        width: '100%',
        display: 'flex',
        paddingTop: 20,
        '& > .name': {
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
        },
        '& > .type': {
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          marginLeft: 10,
          borderRadius: 10,
          fontSize: 18,
          padding: 5,
          backgroundColor: theme.palette.secondary.main,
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
        },
      },
      '& > .infoContainer': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        '& > div': {
          display: 'flex',
          alignItems: 'center',
          paddingTop: 10,
          '&  img': {
            maxWidth: 20,
            maxHeight: 20,
          },
          '& > span': {
            paddingLeft: 10,
            fontSize: 17,
          },
          '& > .pinContainer': {
            display: 'flex',
            alignItems: 'center',
            borderRadius: 10,
            padding: 5,
            backgroundColor: theme.palette.secondary.main,
          },
        },
        '& > .contactContainer': {
          display: 'flex',
          width: '100%',
          '& > .left': {
            height: '100%',
            '& > img': {
              maxWidth: 20,
              maxHeight: 20,
            },
          },
          '& > .right': {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 10,
            '& > .top': {
              '& > .help': {
                fontWeight: 'bold',
                fontSize: 18,
              },
              '& > .email': {
                fontSize: 16,
                paddingLeft: 10,
                textDecoration: 'underline',
                color: 'blue',
              },
            },
            '& > .bottom': {
              '& > span': {
                paddingTop: 5,
                fontSize: 16,
              },
            },
          },
        },
      },
      '& > hr': {
        width: '97%',
        marginTop: 20,
      },

      '& > .giftContainer': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 20px',
        boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
        borderRadius: 10,
        marginTop: 15,
        cursor: 'pointer',
        '& > span': {
          width: '100%',
          textAlign: 'center',
          fontSize: 16,
        },
        '& > div': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingTop: 5,
          '& > hr': {
            width: '20%',
          },
          '& > div': {
            display: 'flex',
            '& > .number': {
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: 16,
            },
            '& > .gift': {
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              marginLeft: 10,
              borderRadius: 10,
              padding: '2px 10px',
              fontWeight: 'bold',
              backgroundColor: theme.palette.secondary.main,
              boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
            },
          },
        },
      },
      '& > .rateContainer': {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        '& > img': {
          maxWidth: 30,
          maxHeight: 30,
        },
        '& > span': {
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontSize: 30,
          paddingLeft: 5,
        },
      },
      '& > .clientPhotosContainer': {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        '& > span': {
          fontSize: 18,
        },
        '& > .photosContainer': {
          display: 'flex',
          overflowX: 'auto',
          '& > div': {
            position: 'relative',
            '& > img': {
              maxHeight: 100,
              minHeight: 100,
              maxWidth: 150,
              minWidth: 150,
              borderRadius: 10,
            },
            '& > .rateContainer': {
              display: 'flex',
              position: 'absolute',
              bottom: 15,
              left: 10,
              backgroundColor: 'white',
              borderRadius: 10,
              opacity: 0.8,
              padding: '0 2px',
              '& > .stars': {
                display: 'flex',
                alignItems: 'center',
                '& > img': {
                  maxHeight: 10,
                  maxWidth: 10,
                },
              },
              '& > span': {
                fontSize: 14,
                paddingLeft: 5,
              },
            },
          },
          '& >*:not(:first-child)': {
            marginLeft: 7,
          },
        },
      },
      '& > .menuContainer': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
        borderRadius: 10,
        marginTop: 20,
        padding: '10px 7px',
        '& > .menuText': {
          fontSize: 20,
          fontWeight: 'bold',
          borderBottom: '1px solid lightgrey',
          width: 'fit-content',
        },
        '& > .category': {
          fontSize: 18,
          fontWeight: 'bold',
          paddingTop: 10,
        },
        '& > .item': {
          fontSize: 16,
        },
        '& > .buttonContainer': {
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          paddingTop: 10,
          '& > span': {
            fontSize: 18,
            fontWeight: 'bold',
            cursor: 'pointer',
          },
        },
      },
      '& > .upcomingEventsContainer': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        cursor: 'pointer',
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: 10,
        marginTop: 10,
        boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
        fontSize: 16,
      },

      '& > .timetableContainer': {
        display: 'flex',
        flexDirection: 'column',
        '& > .title': {
          fontSize: 20,
          fontWeight: 'bold',
          padding: '10px 0',
        },
        '& > .timeItem': {
          fontSize: 16,
        },
      },

      '& > .localServiceText': {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
      },
      '& > .servicesContainer': {
        display: 'flex',
        paddingTop: 5,
        '& > span': {
          borderRight: '1px solid grey',
          padding: '0 5px',
          fontSize: 16,
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
        width: 130,
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  giftModalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > span': {
      textAlign: 'center',
    },
    '& > hr': {
      width: '90%',
    },
    '& > .giftsContainer': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& > div': {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        '& > .number': {
          paddingRight: 5,
          fontSize: 16,
        },
        '& > .giftText': {
          padding: '3px 10px',
          backgroundColor: theme.palette.secondary.main,
          textAlign: 'center',
          borderRadius: 7,
          fontWeight: 'bold',
        },
        '& > .arrowContainer': {
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          '& > img': {
            maxHeight: 30,
          },
        },
        '& > .value': {
          padding: '3px 10px',
          backgroundColor: theme.palette.secondary.main,
          textAlign: 'center',
          borderRadius: 7,
          fontWeight: 'bold',
        },
      },
    },
  },
}))