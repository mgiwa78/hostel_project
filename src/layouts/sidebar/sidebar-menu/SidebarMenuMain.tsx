/* eslint-disable react/jsx-no-target-blank */

import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import {useSelector} from 'react-redux'
import {selectUserAuth} from '@stores/auth/authSlector'

const SidebarMenuMain = () => {
  const userAuth = useSelector(selectUserAuth)

  return (
    <>
      {userAuth?.roles.includes('Organization Admin') && (
        <>
          <SidebarMenuItem
            to='/organization/dashboard/'
            icon='element-11'
            title='Dashboard'
            fontIcon='bi-app-indicator'
          />
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Admin Menu</span>
            </div>
          </div>
          <SidebarMenuItemWithSub
            to='organization/products'
            title='Products'
            fontIcon='bi bi-house-gear'
            icon='bi bi-house-gear'
          >
            <SidebarMenuItem
              to='organization/products/create'
              title='Create Product'
              hasBullet={true}
            />
            <SidebarMenuItem to='organization/products/all' title='All Products' hasBullet={true} />
          </SidebarMenuItemWithSub>
        </>
      )}
    </>
  )
}

export {SidebarMenuMain}
