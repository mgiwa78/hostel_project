/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import {toAbsoluteUrl} from '@helpers/index'
import post from '@lib/post'
import {setAuth} from '@stores/auth/authSlice'
import {useDispatch} from 'react-redux'

export function Auth() {
  const navigate = useNavigate()
  let location = useLocation()

  return (
    <div className=' w-100 flex justify-center items-center flex-col' id='kt_sign_in_form'>
      <div
        className={` justify-center items-center content-center ${
          location.pathname === '/auth' ? 'hidden' : 'lg:block flex'
        }`}
      >
        <img
          alt='Logo'
          src='/media/logos/2b2d47b844e91821d93a812482b946e0.png'
          className='h-60px h-lg-75px w-auto mb-15'
        />
      </div>
      <div className='text-center mb-11'>
        <h1 className='text-dark fw-bolder mb-3 text-[35px] lg:text-[50px]'>
          Welcome to <span className='text-primary '>Nile</span>
          <br />
          <span className='text-primary'> Hostel food</span> app
        </h1>
      </div>

      <div className='d-grid mb-5 text-[20px] lg:text-[50px]' style={{}}>
        <button
          onClick={() => navigate('login')}
          type='button'
          className='btn btn-primary  h-[50px] lg:h-70px w-[330px] lg:w-[462px]'
          style={{fontWeight: '600'}}
        >
          <span className='indicator-label  text-[20px]'>Login</span>
        </button>
      </div>

      <div className='d-grid mb-10'>
        <button
          onClick={() => navigate('register')}
          style={{
            fontWeight: '600',
          }}
          type='button'
          className='btn btn-primary-inverse rounded  border border-primary h-[50px] lg:h-70px w-[330px] lg:w-[462px]'
        >
          <span className='indicator-label text-primary  text-[20px]'>Register</span>
        </button>
      </div>
    </div>
  )
}
