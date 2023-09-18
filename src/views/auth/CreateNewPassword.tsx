/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import post from '@lib/post'
import {setAuth} from '@stores/auth/authSlice'
import {useDispatch} from 'react-redux'
import AuthInput from '@components/form/authInput'

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  confirmPassword: 'Password',
  password: 'Password',
}

export function CreateNewPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values, {setSubmitting}) => {
      // navigate('/')
      setLoading(true)
      const data = {confirmPassword: values.confirmPassword, password: values.password}
      try {
        setTimeout(() => {
          setSubmitting(false)
          setLoading(false)
          navigate('/auth/password-change-success')
        }, 2000)
      } catch (error) {
        setSubmitting(false)
        setLoading(false)
      }
    },
  })
  const handleChange = (e: any) => {
    const {name, value}: {name: 'confirmPassword' | 'password'; value: string} = e.target
    formik.values[name] = value
    formik.setFieldValue(name, value)
  }
  return (
    <form
      className='form w-100'
      noValidate={true}
      onSubmit={formik.handleSubmit}
      id='kt_sign_in_form'
    >
      <div className='text-left mb-11'>
        <h1 className='text-dark fw-bolder mb-3' style={{fontSize: '30px'}}>
          Create new password
        </h1>
      </div>
      <div className='text-left mb-11'>
        <p className='text-dark fw-bolder mb-3 text-gray-500' style={{fontSize: '16px'}}>
          Your new password must be unique from those previously used.
        </p>
      </div>

      <div className='fv-row mb-8'>
        <AuthInput
          handleChange={handleChange}
          type='password'
          placeholder='New Password'
          name='password'
          value={formik.values.password}
          autoComplete='off'
          iconPath=''
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className='fv-plugins-message-container'>
            <span role='alert' className='bo'>
              {formik.errors.confirmPassword}
            </span>
          </div>
        )}
      </div>
      <div className='fv-row mb-8'>
        <AuthInput
          handleChange={handleChange}
          type='password'
          value={formik.values.confirmPassword}
          placeholder='Confirm Password'
          name='confirmPassword'
          autoComplete='off'
          iconPath=''
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <span role='alert' className='text-red-600 ' style={{color: 'red'}}>
              {formik.errors.password}
            </span>
          </div>
        )}
      </div>

      <div className='d-grid mb-10 mt-10'>
        <button
          type='button'
          style={{height: '70px', fontSize: '20px'}}
          className='btn btn-primary'
        >
          <span className='indicator-label'>Reset Password</span>
          <span className='indicator-progress'>
            Please wait...
            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
          </span>
        </button>
      </div>
    </form>
  )
}
