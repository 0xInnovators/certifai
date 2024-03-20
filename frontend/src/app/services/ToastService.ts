import { toast } from 'react-toastify'

export class ToastService {
  static notifyError (errorMessage: string, delay: number = 300): void {
    const errorMessageWithoutPrefix = errorMessage.startsWith('Error: ')
      ? errorMessage.substring('Error: '.length)
      : errorMessage
    toast.error(errorMessageWithoutPrefix, {
      delay
    })
  }

  static notifySuccess (successMessage: string, delay: number = 3000): void {
    toast.success(successMessage, {
      delay
    })
  }
}
