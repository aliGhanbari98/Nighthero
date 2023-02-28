import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    '& > div': {
      borderRadius: 5,
      '& > div': { color: theme.palette.primary.main },
      backgroundColor: 'white',
    },
    position: 'relative',
    '& > span': {
      position: 'absolute',
      left: 15,
      top: -12,
      // color: theme.palette.primary.main,
      fontSize: theme.spacing(2),
      zIndex: 1,
      background: '#fafafa',
      borderRadius: 20,
      padding: '0 4px',
    },
  },

  select: {
    '& .MuiSelect-icon': {
      color: 'grey',
      fontSize: '2.2rem',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 255, .1);',
    },

    '& .MuiInputLabel-root': {
      // color: 'red',
    },
  },
}))
