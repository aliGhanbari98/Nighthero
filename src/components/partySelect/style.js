import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    height: '100%',
    position: 'relative',
    '& > .header': {
      display: 'flex',
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px 7px',
      '& > span': {
        fontSize: 15,
      },
      '& > img': {
        maxWidth: 25,
        cursor: 'pointer',
      },
      backgroundColor: theme.palette.ui.white,
      borderRadius: 10,
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
      zIndex: 1,
    },
    '& > .options': {
      width: '100%',
      position: 'absolute',
      zIndex: 0,
      top: 40,
      backgroundColor: theme.palette.ui.white,
      borderRadius: '0 0 10px 10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 10px',
      '& > .item': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #a9a9a9a8',
        padding: '10px 10px',
        width: '100%',
        cursor: 'pointer',
        backgroundColor: 'white',
        // '& :not(:first-child)': {
        //   padding: '0 0',
        // },
        '& > img': {
          maxWidth: 70,
          minWidth: 70,
          maxHeight: 40,
          borderRadius: 10,
        },
        '& > span': {
          paddingLeft: 15,
          fontSize: 15,
          flex: 1,
        },
      },
      '& > .selected': {
        backgroundColor: 'lightgrey',
      },

      '& > .otherOption': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0 10px 0',
        '& > span': {
          borderBottom: '1px solid black',
        },
      },
    },
  },
}))
