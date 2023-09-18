// import {FC, Suspense} from 'react'
import {Route, Routes, Navigate, Outlet} from 'react-router-dom'
import {MasterLayout} from '../layouts/MasterLayout'
// import TopBarProgress from 'react-topbar-progress-indicator'
import {Dashboard} from '../views/Dashboard'

import {AccountHeader} from '../views/accounts/AccountHeader'
import {PageLink, PageTitle} from '../layouts/core'
import {Overview} from '../views/accounts/components/Overview'
import {Settings} from '../views/accounts/components/settings/Settings'
import {Home} from '@views/Home'
import {MealBuilder} from '@views/MealBuilder'
import {Feedback} from '@views/Feedback'
import {MealHistory} from '@views/MealHistory'
import {ASettings} from '@views/Settings'

// import {getCSSVariableValue} from '../types/_utils'
// import {WithChildren} from '../helpers/index'

const PrivateRoutes = () => {
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  // const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  // const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  // const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const accountBreadCrumbs: Array<PageLink> = [
    {
      title: 'Profile',
      path: '/profile/overview',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

  return (
    <Routes>
      <Route path='/*' element={<MasterLayout />}>
        <Route path='admin/dashboard' element={<Dashboard />} />
        <Route path='admin/home' element={<Home />} />
        <Route path='admin/meal-builder' element={<MealBuilder />} />
        <Route path='admin/feedback' element={<Feedback />} />
        <Route path='admin/meal-history' element={<MealHistory />} />
        <Route path='admin/support' element={<MealHistory />} />
        <Route path='admin/settings' element={<ASettings />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
