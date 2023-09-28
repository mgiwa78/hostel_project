/* eslint-disable react/jsx-no-target-blank */

import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import {useSelector} from 'react-redux'
import {selectUserAuth} from '@stores/auth/authSlector'

const SidebarMenuMain = () => {
  const userAuth = useSelector(selectUserAuth)

  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-5 ls-1'>Admin Menu</span>
        </div>
      </div>

      <SidebarMenuItem
        fontIcon='bi bi-house-door'
        icon='bi bi-house-door'
        to='/admin/home'
        title='Home'
      />
      <SidebarMenuItem
        fontIcon='bi bi-columns-gap'
        icon='bi bi-columns-gap'
        to='/admin/dashboard'
        title='Dashboard'
      />
      <SidebarMenuItem
        fontIcon='bi bi-layers'
        icon='bi bi-layers'
        to='/admin/meal-builder'
        title='Meal Builder'
      />
      <SidebarMenuItem
        fontIcon='bi bi-file-pdf'
        icon='bi bi-file-pdf'
        to='/admin/meal-history'
        title='Meal History'
      />
      <SidebarMenuItem
        fontIcon='bi bi-flag'
        icon='bi bi-flag'
        to='/admin/feedback'
        title='Feedback'
      />
      <SidebarMenuItem
        fontIcon='bi bi-people'
        icon='bi bi-people'
        to='organization/products/all'
        title='Users'
      />
    </>
  )
}

export {SidebarMenuMain}
