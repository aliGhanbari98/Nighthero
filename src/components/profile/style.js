import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  profileContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '2px 2px 2px 4px rgba(0, 0, 255, .1);',
    backgroundColor: 'white',

    '& > .header': {
      backgroundColor: theme.palette.secondary.main,
      padding: 10,
      paddingLeft: 15,
      '& > span': {
        cursor: 'pointer',
        display: 'flex',
        borderRadius: '50%',
        backgroundColor: 'black',
        maxWidth: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        '& > img': {
          maxWidth: 20,
        },
      },
    },
    '& > .body': {
      padding: 20,
    },
  },
  profileHomeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    '& > .header': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > .left': {
        display: 'flex',
        flexDirection: 'column',
        '& > .title': {
          fontWeight: 'bold',
          fontSize: 16,
        },
        '& > .name': {
          marginTop: 30,
          fontSize: 13,
        },
        '& > .email': {
          fontSize: 13,
        },
      },

      '& > .right': {
        '& > img': {
          maxWidth: 40,
        },
      },
    },
    '& > hr': {
      marginTop: 40,
      height: 1,
      width: '60%',
      color: 'gray',
    },
    '& > .body': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 20,
      '& > div': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      },
    },
  },
  profileOrdersContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    '& > .header': {
      width: '100%',
      display: 'flex',
      // paddingTop: 20,
      '& > .title': {
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
    '& > hr': {
      marginTop: 20,
      height: 1,
      width: '60%',
      color: 'gray',
    },
    '& > .body': {
      width: '100%',
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      '& > div': {
        height: 130,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > .left': {
          height: '100%',
          '& > img': {
            maxWidth: 130,
            maxHeight: 130,
            minHeight: 130,
            minWidth: 140,
            objectFit: 'cover',
            borderRadius: 15,
          },
        },
        '& > .right': {
          paddingLeft: 10,
          height: '95%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '& > .resName': {
            fontWeight: 'bold',
            fontSize: 16,
          },
          '& > .priceContainer': {
            '& > .prive': {
              fontWeight: 'bold',
              paddingRight: 7,
              fontSize: 15,
            },
            '& > .price': {
              fontWeight: 'bold',
              paddingLeft: 7,
              fontSize: 15,
              borderLeft: '1px solid lightGray',
            },
          },
          '& > .infoContainer': {
            '& > span': {
              fontSize: 13,
              lineHeight: '5pt',
            },
          },
        },
      },
    },
  },

  profileGiftContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    '& > .header': {
      width: '100%',
      display: 'flex',
      // paddingTop: 20,
      '& > .title': {
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
    '& > hr': {
      marginTop: 20,
      height: 1,
      width: '60%',
      color: 'gray',
    },
    '& > .body': {
      width: '100%',
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > .giftContainer': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
        borderRadius: 15,
        padding: 10,
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
      '& > .totalGifts': {
        color: theme.palette.ui.green,
        paddingTop: 10,
      },
      '& > .descContainer': {
        fontSize: 14,
        textAlign: 'center',
        '& > span': {
          display: 'inline',
          width: 10,
          padding: '3px 6px',
          backgroundColor: theme.palette.secondary.main,
          color: 'black',
          fontWeight: 'bold',
          borderRadius: 5,
          fontSize: 14,
        },
      },
    },
  },
  arrowContainer: {
    cursor: 'pointer',
    display: 'flex',
    borderRadius: '50%',
    backgroundColor: 'white',
    // width: 30,
    // height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    padding: 5,
    '& > img': {
      maxWidth: 12,
    },
  },
}))
