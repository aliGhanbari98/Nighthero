import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    padding: 2,
    border: 'none',
    outline: 'none',
    '&:focus': {
      outline: 'none',
    },
    '& > .MuiBox-root': {
      outline: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
  },
}))
