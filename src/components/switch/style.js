import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    height: 45,
    width: '100%',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,

    '& .myLabel': {
      fontSize: theme.spacing(2),
      color: theme.palette.primary.main,
    },
  },
}))
