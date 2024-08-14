import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(5, 'to short').max(50, 'to Long').required()
})
