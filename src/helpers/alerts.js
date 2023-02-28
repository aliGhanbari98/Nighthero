import swal from 'sweetalert'

export const deleteItemAlert = callback => {
  swal({
    title: 'Are you sure?',
    text: 'Once deleted, recovery will not be possible!',
    icon: 'warning',
    buttons: ['Cancel', 'Delete'],
    dangerMode: true,
  }).then(willDelete => {
    if (willDelete) {
      console.log('alert reached')
      callback()
    }
  })
}

export const updateStatusAlert = (query, payload, callback) => {
  swal({
    title: 'Are you sure?',
    icon: 'warning',
    buttons: ['Cancel', 'Update'],
    dangerMode: true,
  }).then(willDelete => {
    if (willDelete) {
      query(payload).then(() => {
        swal('Successfully Updated')
        callback()
      })
    }
  })
}

export const successAlert = callback => {
  swal({
    icon: 'success',
    title: 'Done.',
  }).then(ok => {
    if (ok) {
      const doc = document.getElementById('content-container')
      doc?.scrollTo({ top: 0, behavior: 'smooth' })
      if (callback) callback()
    }
  })
}

export const errorAlert = ({ message, detail, callback }) => {
  swal({
    icon: 'warning',
    title: message,
    text: detail,
  }).then(ok => {
    if (ok && callback) callback()
  })
}

export const warningAlert = ({ message, detail, callback, buttons = null }) => {
  swal({
    icon: 'warning',
    title: message,
    text: detail,
    buttons: buttons || ['Indietro', 'Procedi senza salvare'],
  }).then(ok => {
    if (ok && callback) callback()
  })
}

export const comingSoonAlert = () => {
  swal({
    icon: 'info',
    title:
      'This section will be integrated and fully functional once the mobile applications work.',
  })
}
