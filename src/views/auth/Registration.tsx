/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {getUserByToken, register} from '../../services/auth/_requests'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../helpers'
import {PasswordMeterComponent} from '../../types/components'
import {useAuth} from '../../services/auth/Auth'
import AuthInput from '@components/form/authInput'

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  changepassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function Registration() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.changepassword
        )
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The registration details is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework  '
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
      <div className='text-left mb-11'>
        <h1 className='text-dark fw-bolder mb-3' style={{fontSize: '30px'}}>
          Hello! Register to get
          <br /> started
        </h1>
      </div>

      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      <div className='fv-row mb-2'>
        <AuthInput
          type='text'
          placeholder='Fullname'
          name='Fullname'
          autoComplete='off'
          iconPath=''
        />
      </div>
      <div className='fv-row mb-2'>
        <AuthInput type='email' placeholder='Email' name='Email' autoComplete='off' iconPath='' />
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          type='text'
          placeholder='Student ID'
          name='Student ID'
          autoComplete='off'
          iconPath=''
        />
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          type='text'
          placeholder='Phone Number'
          name='Phone Number'
          autoComplete='off'
          iconPath=''
        />
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          type='password'
          placeholder='Password'
          name='Password'
          autoComplete='off'
          iconPath=''
        />
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          type='password'
          placeholder='Confirm password'
          name='Confirm password'
          autoComplete='off'
          iconPath=''
        />
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-check form-check-inline' htmlFor='kt_login_toc_agree'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
            {...formik.getFieldProps('acceptTerms')}
          />
          <span>
            I agree to the <a className='ms-1 link-primary'>Terms and Conditions</a>.
          </span>
        </label>
        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.acceptTerms}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <div className='d-grid mb-10 mt-10'>
          <button
            type='submit'
            id='kt_sign_in_submit'
            style={{height: '70px', fontSize: '20px'}}
            className='btn btn-primary'
          >
            <span className='indicator-label'>Register</span>
            <span className='indicator-progress'>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          </button>
        </div>
      </div>
      <div className='text-gray-500 text-center fw-semibold fs-6 max-lg:absolute max-lg:-bottom-56 max-lg:translate-x-1/2 max-lg:right-1/2'>
        Already have an account?{' '}
        <Link to={'/auth/login'} className='link-primary'>
          Login Now
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
