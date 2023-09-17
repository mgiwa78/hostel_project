/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './Registration'
import {ForgotPassword} from './ForgotPassword'
import {Login} from './Login'
import {Auth} from './Auth'
import {useNavigate, useLocation} from 'react-router-dom'
import {OTPVerification} from './OTPVerification'
import {CreateNewPassword} from './CreateNewPassword'
import {PasswordChangeSuccess} from './PasswordChangeSuccess'

const AuthLayout = () => {
  let navigate = useNavigate()
  let location = useLocation()

  console.log(location.pathname === '/auth')
  console.log(location)
  useEffect(() => {
    document.body.classList.add('bg-body')
    return () => {
      document.body.classList.remove('bg-body')
    }
  }, [])
  function goBack() {
    navigate(-1)
  }
  return (
    <div
      className='d-flex flex-column flex-root'
      id='kt_app_root'
      style={{backgroundColor: '#274193'}}
    >
      <div
        className='d-flex flex-column flex-lg-row flex-column-fluid'
        style={{
          height: 'max-content',
        }}
      >
        <div
          className={`d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1 relative${
            location.pathname === '/auth'
              ? 'rounded-t-[30px] lg:rounded-r-[64px] lg:rounded-tl-none'
              : 'rounded-none lg:rounded-r-[64px] lg:rounded-tl-none  h-full'
          }`}
          style={{
            backgroundColor: '#fff',
          }}
        >
          {location.pathname === '/auth' || location.pathname === '/auth/' ? (
            ''
          ) : (
            <div className='row'>
              <div
                onClick={() => goBack()}
                className='bg-white p-3 rounded border border-gray-300 w-auto'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                >
                  <path
                    d='M13.1576 2.36708C13.0656 2.27493 12.9564 2.20181 12.8362 2.15192C12.716 2.10203 12.5871 2.07635 12.4569 2.07635C12.3268 2.07635 12.1979 2.10203 12.0777 2.15192C11.9574 2.20181 11.8482 2.27493 11.7563 2.36708L5.17756 8.94583C5.10417 9.01907 5.04595 9.10607 5.00622 9.20184C4.96649 9.29761 4.94604 9.40027 4.94604 9.50396C4.94604 9.60764 4.96649 9.71031 5.00622 9.80608C5.04595 9.90185 5.10417 9.98884 5.17756 10.0621L11.7563 16.6408C12.1442 17.0287 12.7696 17.0287 13.1576 16.6408C13.5455 16.2529 13.5455 15.6275 13.1576 15.2396L7.4259 9.5L13.1655 3.76042C13.5455 3.38042 13.5455 2.74708 13.1576 2.36708Z'
                    fill='#1E232C'
                    stroke='#1E232C'
                    strokeWidth='0.2'
                  />
                </svg>
              </div>
            </div>
          )}
          <div className='d-flex flex-center flex-column flex-lg-row-fluid '>
            <div className='w-lg-500px p-10 '>
              <Outlet />
            </div>
          </div>
        </div>

        <div
          className={`${
            location.pathname !== '/auth'
              ? 'hidden lg:flex lg:flex-row w-1/2 bg-cover bg-center order-1 lg:order-2'
              : 'hidden lg:flex lg:flex-row w-1/2 bg-cover  order-1 lg:order-2 bg-bottom'
          }`}
          style={{
            padding: 0,
            backgroundColor: '#274193',
            backgroundImage: 'url(/media/background/login_splash.svg)',
            backgroundPositionX: '20px',
            backgroundRepeat: 'no-repeat',
            height: '100%',
          }}
        ></div>
        <div
          className={`${
            location.pathname === '/auth' || location.pathname === '/auth/'
              ? 'lg:hidden  flex'
              : 'lg:hidden hidden'
          }`}
          style={{
            backgroundImage: 'url(/media/background/group_782.png)',
            backgroundRepeat: 'no-repeat',
            height: '50%',
            width: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='bg-white w-[225px] h-[86px] p-5 rounded-md'>
            <div className='row justify-content-center align-content-center align-items-center'>
              <img
                alt='Logo'
                src='/media/logos/2b2d47b844e91821d93a812482b946e0.png'
                className='h-60px h-lg-75px w-auto mb-15'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='otp-verification' element={<OTPVerification />} />
      <Route path='create-new-password' element={<CreateNewPassword />} />
      <Route path='password-change-success' element={<PasswordChangeSuccess />} />
      <Route index element={<Auth />} />
    </Route>
  </Routes>
)

export {AuthPage}
