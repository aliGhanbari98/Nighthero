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
    backgroundColor: '#ffc0cb8a',
    '& > .header': {
      width: '100%',
      display: 'flex',
      padding: '15px 15px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.7,
      '& > input': {
        width: '60%',
        maxWidth: 220,
        borderRadius: 10,
        border: 'none',
        padding: 5,
      },
      '& > .searchInputContainer': {
        display: 'flex',
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 5,
        borderRadius: 15,
        height: 40,
        '& > img': {
          maxWidth: 20,
        },
        '& > input': {
          width: '60%',
          maxWidth: 220,
          borderRadius: 15,
          border: 'none',
          padding: 5,
          flex: 1,
          marginRight: 3,
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
    '& > .body': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      '& > .nameContainer': {
        width: '100%',
        display: 'flex',
        paddingTop: 20,
        paddingLeft: 20,
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
          fontSize: 16,
          padding: 5,
          backgroundColor: theme.palette.secondary.main,
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 255, .1);',
        },
      },
      '& > .menuText': {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 10,
      },
      '& > .menuContainer': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
        paddingTop: 0,
        paddingBottom: 40,
        '& > div': {
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10,
          '& > .category': {
            fontSize: 16,
            fontWeight: 'bold',
          },
          '& > .itemsContainer': {
            '& > .item': {
              display: 'flex',
              alignItems: 'center',
              '& > span': {},
              '& > .lineContainer': {
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                '& > hr': {
                  width: '93%',
                },
              },
            },
          },
        },
      },
      '& > .buttonContainer': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 40,
        '& > span': {
          fontSize: 18,
          borderBottom: '1px solid grey',
          cursor: 'pointer',
        },
      },
    },
  },
}))
