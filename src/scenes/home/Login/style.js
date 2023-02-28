import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(105, 105, 105, 0.7)',
    '& > .body': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      padding: 30,
      borderRadius: '30px 30px 0 0 ',
      '& > span': {
        width: '100%',
      },
      '& > .title': {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 18,
      },
      '& > button': {
        width: 130,
        backgroundColor: theme.palette.secondary.main,
        marginTop: 50,
      },
      '& > .textButtonContainer': {
        paddingTop: 15,
        width: '100%',
        display: 'flex',
        '& > .passwordForgotten': {
          borderBottom: `1px solid grey`,
          fontSize: 13,
          cursor: 'pointer',
        },
        '& > .register': {
          borderBottom: `1px solid black`,
          fontWeight: 'bold',
        },
      },
      '& > .registerButtonContainer': {
        paddingTop: 20,
        justifyContent: 'center',
        cursor: 'pointer',
      },
      '& input': {
        marginTop: 20,
      },
    },
  },
}))
