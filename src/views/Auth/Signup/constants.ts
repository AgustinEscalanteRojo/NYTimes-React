import { object, string } from 'yup'

export const InitialValues = {
  email: '',
  password: '',
}

export const ValidationSignupSchema = object({
  email: string().email('No es un email valido').required(),
  password: string().required(),
})
