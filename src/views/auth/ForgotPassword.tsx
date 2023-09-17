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
})

const initialValues = {
  email: '',
}

export function ForgotPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values, {setSubmitting}) => {
      setLoading(true)
      const data = {email: values.email}
      try {
        navigate('/auth/otp-verification')
      } catch (error) {
        setSubmitting(false)
        setLoading(false)
      }
    },
  })
  const handleChange = (e: any) => {
    const {name, value}: {name: 'email'; value: string} = e.target
    formik.values[name] = value
    formik.setFieldValue(name, value)
  }

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate={true}
      id='kt_sign_in_form'
    >
      <div className='text-left mb-2'>
        <h1 className='text-dark fw-bolder mb-3' style={{fontSize: '30px'}}>
          Forgot Password?
        </h1>
      </div>
      <div className='text-left mb-11'>
        <p className='text-dark  mb-3 text-gray-500' style={{fontSize: '16px'}}>
          Don't worry! It occurs. Please enter the email linked with your account.
        </p>
      </div>

      <div className='fv-row mb-8'>
        <AuthInput
          handleChange={handleChange}
          type='email'
          placeholder='Enter your email'
          name='email'
          value={formik.values.email}
          autoComplete='off'
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

      <div className='d-grid mb-10 mt-10'>
        <button
          // to={'/auth/otp-verification'}
          type='submit'
          style={{height: '70px', fontSize: '20px'}}
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Send Code</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      <div className='text-gray-500 text-center fw-semibold fs-6 max-lg:absolute max-lg:bottom-10 max-lg:translate-x-1/2 max-lg:right-1/2'>
        Remember Password?{' '}
        <Link to={'/auth/login'} className='link-primary'>
          Login
        </Link>
      </div>
    </form>
  )
}
