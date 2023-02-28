import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > .itemsContainer': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > span': {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 13px',
        borderRadius: 10,
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1)',
        marginLeft: 10,
        marginTop: 10,
        cursor: 'pointer',
        flex: '1 1',
        maxWidth: 70,
        minWidth: 70,
      },
      '& > .selected': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    '& > .buttonsContainer': {
      width: '100%',
      display: 'flex',
      justifyContent: 'end',
      paddingTop: 30,
      '& > button': {
        width: 100,
        backgroundColor: theme.palette.ui.green,
        color: 'white',
      },
    },
  },
}))
