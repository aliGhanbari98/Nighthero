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
    [theme.breakpoints.up('sm')]: {
      backgroundImage: 'url(./images/background_desktop.png)',
    },
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
        '& > *': {
          maxWidth: 100,
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
      '& > .desktopTitles': {
        width: '100%',
        maxWidth: 560,
        display: 'flex',
        '& > .textsContainer': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          paddingRight: 10,
          '& > .normalTitle': {
            fontSize: 24,
          },
          '& > .boldTitle': {
            fontSize: 34,
            fotnWeight: 'bold',
            margin: 0,
            marginTop: 5,
          },
        },
        '& > .logoContainer': {
          '& > img': {
            maxHeight: 77,
          },
        },
      },
      '& > .searchBar': {
        width: '100%',
        maxWidth: 555,
        '& > div': {
          width: ({ desktopMode }) => (desktopMode ? '80%' : '100%'),
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
            cursor: 'pointer',
            '& > img': {
              maxHeight: 60,
            },
          },
        },
        [theme.breakpoints.up('sm')]: {
          marginTop: 50,
        },
      },
      [theme.breakpoints.up('sm')]: {
        alignItems: 'start',
        paddingLeft: '10%',
      },
    },
  },
}))
