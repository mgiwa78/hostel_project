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
  email: '',
  password: '',
}

export function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values, {setSubmitting}) => {
      // navigate('/')
      console.log(values)
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
  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    const {name, value}: {name: 'email' | 'password'; value: string} = e.target
    formik.values[name] = value
    formik.setFieldValue(name, value)
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      id='kt_login_signin_form kt_sign_in_form'
      className='form w-100 h-100 '
      noValidate
    >
      <div className='text-left mb-11 '>
        <h1 className='text-dark fw-bolder mb-3' style={{fontSize: '30px'}}>
          Welcome back! Glad <br /> to see you, Again!
        </h1>
      </div>

      <div className='fv-row mb-8'>
        <AuthInput
          handleChange={handleChange}
          type='email'
          placeholder='Student ID/ Email'
          name='email'
          value={initialValues.email}
          autoComplete='false'
          iconPath=''
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert' className='text-red-600 '>
              {formik.errors.email}
            </span>
          </div>
        )}
      </div>
      <div className='fv-row mb-3'>
        <AuthInput
          handleChange={handleChange}
          type='password'
          placeholder='Enter your password'
          name='password'
          autoComplete='off'
          value={initialValues.password}
          iconPath='/media/icons/eye.svg'
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container fr'>
            <span role='alert' className='text-red-600 '>
              {formik.errors.password}
            </span>
          </div>
        )}
      </div>
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div></div>
        <Link to={'/auth/forgot-password'} className='link-primary'>
          Forgot Password
        </Link>
      </div>
      <div className='d-grid mb-10 mt-10'>
        <button
          type='submit'
          style={{height: '70px', fontSize: '20px'}}
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Login</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      <div className='text-gray-500 text-center fw-semibold fs-6 max-lg:absolute max-lg:bottom-10 max-lg:translate-x-1/2 max-lg:right-1/2'>
        Don’t have an account?{' '}
        <Link to={'/auth/register'} className='link-primary'>
          Register Now
        </Link>
      </div>
    </form>
  )
}
