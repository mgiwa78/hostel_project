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
    .max(50, 'Maximum 50 symbols'),
})

const initialValues = {
  email: '',
}

export function OTPVerification() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values, {setSubmitting}) => {
      setLoading(true)

      try {
        navigate('/auth/password-change-success')
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
    <form className='form w-100' noValidate onSubmit={formik.handleSubmit} id='kt_sign_in_form'>
      <div className='text-left mb-2'>
        <h1 className='text-dark fw-bolder mb-3' style={{fontSize: '30px'}}>
          OTP Verification
        </h1>
      </div>
      <div className='text-left mb-11'>
        <p className='text-dark  mb-3 text-gray-500' style={{fontSize: '16px'}}>
          Enter the verification code we just sent on your mobile number.
        </p>
      </div>

      <div className='fv-row mb-8'>
        <div className='flex gap-1 justify-center items-center'>
          <input
            type='text'
            name='code_1'
            data-inputmask="'mask': '9', 'placeholder': ''"
            maxLength={1}
            style={{width: '60px', height: '60px'}}
            className='form-control  bg-transparent text-center mx-1 my-2'
            inputMode='text'
          />
          <input
            type='text'
            name='code_2'
            data-inputmask="'mask': '9', 'placeholder': ''"
            maxLength={1}
            style={{width: '60px', height: '60px'}}
            className='form-control    bg-transparent text-center mx-1 my-2'
            inputMode='text'
          />
          <input
            type='text'
            name='code_3'
            data-inputmask="'mask': '9', 'placeholder': ''"
            maxLength={1}
            style={{width: '60px', height: '60px'}}
            className='form-control    bg-transparent text-center mx-1 my-2'
            inputMode='text'
          />
          <input
            type='text'
            name='code_4'
            style={{width: '60px', height: '60px'}}
            data-inputmask="'mask': '9', 'placeholder': ''"
            maxLength={1}
            className='form-control    bg-transparent text-center mx-1 my-2'
            inputMode='text'
          />
        </div>
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
          type='submit'
          style={{height: '70px', fontSize: '20px'}}
          className='btn btn-primary'
        >
          <span className='indicator-label'>Send Code</span>
          <span className='indicator-progress'>
            Please wait...
            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
          </span>
        </button>
      </div>
      <div className='text-gray-500 text-center fw-semibold fs-6 max-lg:absolute max-lg:bottom-10 max-lg:translate-x-1/2 max-lg:right-1/2'>
        Didn’t received code?{' '}
        <Link to={'/auth/forgot-password'} className='link-primary'>
          Resend
        </Link>
      </div>
    </form>
  )
}
