import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    '& > div': {
      borderRadius: 10,
      backgroundColor: 'white',
      border: `1px solid ${theme.palette.primary.main}`,
      '& > div': { color: theme.palette.primary.main },
      // height: 60,
      minHeight: 45,
    },
    position: 'relative',
    '& > span': {
      // position: 'absolute',
      // left: 15,
      // top: -12,
      // color: theme.palette.primary.main,
      // fontSize: theme.spacing(2),
      // zIndex: 1,
      // background: '#fafafa',
      // borderRadius: 20,
      // padding: '0 4px',
      display: 'hidden',
    },
  },

  select: {
    '& .MuiSelect-icon': {
      color: theme.palette.primary.main,
      fontSize: '2.2rem',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.palette.primary.main}`,
    },

    '& .MuiInputLabel-root': {
      color: 'red',
    },

    '& .MuiInputBase-root': {
      paddingRight: '0px !important',
    },

    '& .MuiButtonBase-root': {
      '& > svg': {
        fill: theme.palette.primary.main,
        fontSize: '2.2rem',
        cursor: 'pointer',
      },
    },

    '& .MuiInput-root': {
      height: '100%',
      minHeight: 45,
      paddingLeft: 5,
      '& > input': {
        color: 'black',
        width: '100% !important',
      },
    },

    '& .MuiInput-input': {
      borderBottom: 'none',
      width: '100%',
      height: '100%',
      paddingLeft: 5,
    },

    '& .css-1a1fmpi-MuiInputBase-root-MuiInput-root:before': {
      borderBottom: 'none',
    },

    '& .css-1a1fmpi-MuiInputBase-root-MuiInput-root:after': {
      borderBottom: 'none',
    },

    '& .css-1q60rmi-MuiAutocomplete-endAdornment': {
      top: 'calc(50% - 20px)',
    },

    '& .MuiFormControl-root': {
      height: '100%',
      minHeight: 30,
    },

    '& .Mui-focused': {
      outline: 'none',
    },
    '& .MuiAutocomplete-clearIndicator': {
      display: 'none',
    },
    '& .MuiInput-underline': {},
    '& .MuiAutocomplete-endAdornment': {
      display: 'none',
      // width: 0,
    },
  },
}))
