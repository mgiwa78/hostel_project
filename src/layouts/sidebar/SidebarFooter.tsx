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
    <div className='app-sidebar-footer flex-column-auto pt-2 pb-6 px-6' id='kt_app_sidebar_footer'>
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
      <button
        onClick={handleLogout}
        className='btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100'
        data-bs-toggle='tooltip'
        data-bs-trigger='hover'
        data-bs-dismiss-='click'
        title='Metronic Docs & Components'
      >
        <span className='btn-label'>Sign Out</span>
        <KTIcon iconName='document' className='btn-icon fs-2 m-0' />
      </button>
    </div>
  )
}

export {SidebarFooter}
