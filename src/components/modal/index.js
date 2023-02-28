import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { useStyle } from './style'

const MyModal = ({
  children,
  open,
  handleClose,
  position = { top: '50%', left: '50%' },
  fullWidth = false,
  backgroundColor = 'background.paper',
  opacity = 1,
  maxWidth,
}) => {
  const classes = useStyle()

  const style = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    transform: 'translate(-50%, -50%)',
    width: fullWidth ? '100%' : '90%',
    // maxWidth: fullWidth ? null : 720,
    maxWidth: maxWidth || 720,
    bgcolor: backgroundColor,
    boxShadow: 24,
    p: 2,
    opacity,
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      classes={{ root: classes.root }}
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  )
}

export default MyModal
