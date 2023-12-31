/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../views/ErrorsPage'
import {AuthPage} from '../views/auth/AuthLayout'
import {App} from '../App'
import {useSelector} from 'react-redux'
import {selectUserAuth} from '../stores/auth/authSlector'
import Logout from '../services/auth/Logout'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  const userAuth = useSelector(selectUserAuth)

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Navigate to='auth' />} />{' '}
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          <Route path='auth/*' element={<AuthPage />} />
          <Route path='*' element={<PrivateRoutes />} />
          {/* <Route index element={<Navigate to='/organization/dashboard' />} />

          <Route path='auth/*' element={<AuthPage />} />
          <Route path='*' element={<Navigate to='/auth' />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
