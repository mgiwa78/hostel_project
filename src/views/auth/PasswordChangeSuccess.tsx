/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import {toAbsoluteUrl} from '@helpers/index'
import post from '@lib/post'
import {setAuth} from '@stores/auth/authSlice'
import {useDispatch} from 'react-redux'
import AuthInput from '@components/form/authInput'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'admin@mail.com',
  password: 'Password',
}

export function PasswordChangeSuccess() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values, {setSubmitting}) => {
      // navigate('/')
      setLoading(true)
      const data = {email: values.email, password: values.password}
      try {
        const LOGIN_RESPONSE = await post('auth/signin', data)

        dispatch(setAuth(LOGIN_RESPONSE.data))
        navigate('/')
      } catch (error) {
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className='form w-100' noValidate id='kt_sign_in_form'>
      <div className='row mb-11'>
        <img src='/media/icons/success.svg' className='w-24 h-24' alt='' />
      </div>
      <div className='text-center mb-2'>
        <h1 className='text-dark fw-bolder mb-3' style={{fontSize: '30px'}}>
          Password Changed!
        </h1>
      </div>
      <div className='text-center mb-11'>
        <p className='text-dark mb-3 text-gray-500' style={{fontSize: '16px'}}>
          Your password has been changed successfully.
        </p>
      </div>

      <div className='d-grid mb-10 mt-10'>
        <Link
          to={'/auth/login'}
          style={{height: '70px', fontSize: '20px'}}
          className='btn btn-primary flex justify-center pt-6 items-center text-center'
        >
          <span className='indicator-label'>Back to login</span>
        </Link>
      </div>
    </form>
  )
}
