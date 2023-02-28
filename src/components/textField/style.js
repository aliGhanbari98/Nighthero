import { alpha, makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 35,
    border: '1px solid red',
    borderColor: ({ hasError }) =>
      hasError ? theme.palette.ui.red : theme.palette.primary.main,
    backgroundColor: 'white',
    '& input': {
      borderRadius: 5,
      position: 'relative',
      border: '1px solid',
      color: theme.palette.primary.main,
      borderColor: ({ hasError }) =>
        hasError ? theme.palette.ui.red : theme.palette.primary.main,
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: -0.08,
      height: '100%',
      padding: '0 12px',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      '&:focus': {
        boxShadow: ({ hasError }) =>
          `${alpha(
            hasError ? theme.palette.ui.red : theme.palette.ui.secondaryBlue,
            0.5,
          )} 0 0 0 0.1rem`,
        borderColor: ({ hasError }) =>
          hasError ? theme.palette.ui.red : theme.palette.primary.main,
      },
      '&::placeholder': {
        color: theme.palette.primary.main,
        weight: 300,
      },
    },
  },
}))
