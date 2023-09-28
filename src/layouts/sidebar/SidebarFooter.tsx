/* eslint-disable react/jsx-no-target-blank */
import {useDispatch} from 'react-redux'
import {KTIcon} from '../../helpers'
import {removeAuth} from '@stores/auth/authSlice'
import {SidebarMenuItem} from './sidebar-menu/SidebarMenuItem'

const SidebarFooter = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(removeAuth())
  }
  return (
    <div className='app-sidebar-footer flex-column-auto  px-2' id='kt_app_sidebar_footer'>
      <div className='app-sidebar-menu overflow-hidden flex-column-fluid'>
        <SidebarMenuItem
          fontIcon='bi bi-headset'
          icon='bi bi-headset'
          to='/admin/support'
          title='Support'
        />
        <SidebarMenuItem
          fontIcon='bi bi-gear'
          icon='bi bi-gear'
          to='/admin/settings'
          title='Settings'
        />
      </div>

      <button
        onClick={handleLogout}
        className='mb-6 btn btn-flex flex-column-fluid app-sidebar-menu flex-center btn-custom btn-primary overflow-hidden text-left text-nowrap px-0 h-40px w-100'
        data-bs-toggle='tooltip'
        data-bs-trigger='hover'
        data-bs-dismiss-='click'
        title='Log out'
      >
        {' '}
        <SidebarMenuItem
          fontIcon='exit-left'
          icon='exit-left'
          to='/admin/settings'
          title='Sign out'
        />
      </button>
    </div>
  )
}

export {SidebarFooter}
