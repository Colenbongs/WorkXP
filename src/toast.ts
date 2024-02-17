export  async function toast(message: string, duration = 1) {
    const toast = document.createElement('ion-toast')
      toast.message = message
      toast.duration = duration
    
    document.body.appendChild(toast)
    return toast.present()
}

