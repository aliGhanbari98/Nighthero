import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundImage: 'url(./images/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    '& > .header': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 15px',
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.7,
      '& > .left': {
        display: 'flex',
        alignItems: 'center',
        '& > img': {
          height: 50,
        },
        '& > span': {
          fontSize: 16,
        },
      },
      '& > .right': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        flex: 1,
        '& > div': {
          width: '40%',
        },
        '& > .loginButtonContainer': {
          marginRight: 10,
          '& > button': {
            fontWeight: 200,
          },
        },
      },
    },
    '& > .body': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      padding: '60px 10px 20px 10px',
      flex: 1,
      '& > p': {
        textAlign: 'center',
        padding: '0px 5px',
        fontSize: 16,
      },
      '& > .searchBar': {
        width: '100%',
        height: 45,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginTop: 20,
        '& > .partySelectContainer': {
          width: '53%',
          height: '100%',
        },
        '& > .autoCompleteContainer': {
          width: '30%',
          height: '100%',
        },
        '& > .searchButtonContainer': {
          height: '100%',
          width: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: theme.palette.secondary.main,
          // borderRadius: '50%',
          cursor: 'pointer',
          '& > img': {
            maxHeight: 60,
          },
        },
      },
    },
  },
}))
