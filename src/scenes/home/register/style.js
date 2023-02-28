import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.secondary.main,
    overflowY: 'auto',

    '& > .header': {
      width: '100%',
      display: 'flex',
      padding: 20,
      '& > span': {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        cursor: 'pointer',
      },
    },
    '& > .body': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      '& > span': {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
      },
      '& > .formContainer': {
        width: '100%',
        padding: '40px 20px 30px 20px',
        '& > div': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            marginTop: 10,
          },
          '& > button': {
            width: 130,
            marginTop: 40,
          },
        },
      },
    },
  },
  stepOneContainer: {},
  stepTwoContainer: {
    '& > .phoneInputsContainer': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > .prefix': {
        width: '30%',
      },
      '& > .phoneNumber': {
        width: '65%',
      },
    },
  },
  stepThreeContainer: {
    '& > .regulatiosContainer': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 0,
      '& > .regulationItem': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        borderBottom: '1px solid grey',
        '& > .titleContainer': {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& > .title': {
            paddingRight: 5,
            fontSize: 20,
            fontWeight: 'bold',
          },
          '& > .switchContainer': {
            '& > div': {
              border: 'none',
            },
          },
        },
        '& > p': {
          textAlign: 'center',
          marginTop: 0,
        },
      },
    },
  },
}))
