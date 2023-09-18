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
  fullName: '',
  email: '',
  studentID: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  acceptTerms: '',
}

const registrationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  studentID: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Student ID is required'),
  phoneNumber: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Phone Number is required'),
  confirmPassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  acceptTerms: Yup.string().required('You must accept the terms and conditions'),
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
          values.fullName,
          values.phoneNumber,
          values.password,
          values.confirmPassword
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

  const handleChange = (e: any) => {
    const {name, value}: {name: 'email' | 'password'; value: string} = e.target
    formik.values[name] = value
    console.log(name, value)
    formik.setFieldValue(name, value)
  }
  return (
    <form
      className='form w-100 h-100 fv-plugins-bootstrap5 fv-plugins-framework  relative'
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
          handleChange={handleChange}
          type='text'
          placeholder='Fullname'
          name='fullName'
          value={formik.values.fullName}
          autoComplete='false'
          iconPath=''
        />{' '}
        {formik.touched.fullName && formik.errors.fullName && (
          <div className='fv-plugins-message-container fr'>
            <span role='alert' className='text-red-600 '>
              {formik.errors.fullName}
            </span>
          </div>
        )}
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          handleChange={handleChange}
          type='email'
          placeholder='Email'
          name='email'
          value={formik.values.email}
          autoComplete='off'
          iconPath=''
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container fr'>
            <span role='alert' className='text-red-600 '>
              {formik.errors.email}
            </span>
          </div>
        )}
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          handleChange={handleChange}
          type='text'
          placeholder='Student ID'
          name='studentID'
          autoComplete='off'
          value={formik.values.studentID}
          iconPath=''
        />
        {formik.touched.studentID && formik.errors.studentID && (
          <div className='fv-plugins-message-container fr'>
            <span role='alert' className='text-red-600 '>
              {formik.errors.studentID}
            </span>
          </div>
        )}
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          handleChange={handleChange}
          type='text'
          placeholder='Phone Number'
          name='phoneNumber'
          value={formik.values.phoneNumber}
          autoComplete='off'
          iconPath=''
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className='fv-plugins-message-container fr'>
            <span role='alert' className='text-red-600 '>
              {formik.errors.phoneNumber}
            </span>
          </div>
        )}
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          handleChange={handleChange}
          type='password'
          placeholder='Password'
          name='password'
          value={formik.values.password}
          autoComplete='off'
          iconPath=''
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container fr'>
            <span role='alert' className='text-red-600 '>
              {formik.errors.password}
            </span>
          </div>
        )}
      </div>
      <div className='fv-row mb-2'>
        <AuthInput
          handleChange={handleChange}
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          autoComplete='off'
          value={formik.values.confirmPassword}
          iconPath=''
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className='fv-plugins-message-container fr'>
            <span role='alert' className='text-red-600 '>
              {formik.errors.confirmPassword}
            </span>
          </div>
        )}
      </div>

      <div className='fv-row mb-8'>
        <label className='form-check form-check-inline' htmlFor='kt_login_toc_agree'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
            {...formik.getFieldProps('acceptTerms')}
            value={formik.values.acceptTerms}
          />
          <span>
            I agree to the <a className='ms-1 link-primary font-bold'>Terms and Conditions</a>.
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

      <div className='text-center'>
        <div className='d-grid mb-10 mt-10'>
          <button
            type='submit'
            style={{height: '70px', fontSize: '20px'}}
            className='btn btn-primary'
            disabled={formik.isSubmitting}
          >
            {!loading && <span className='indicator-label '>Register</span>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
      </div>
      <div className='text-gray-500 w-auto text-center fw-semibold fs-6 max-lg:absolute -max-lg:bottom-30 max-lg:translate-x-1/2 max-lg:right-1/2'>
        Already have an account?{' '}
        <Link to={'/auth/login'} className='link-primary font-bold'>
          Login Now
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
