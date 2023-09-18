/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {PageTitle} from '../layouts/core'
import {useSelector} from 'react-redux'
import {selectUserAuth} from '@stores/auth/authSlector'
import StudentDasboard from '@components/StudentDasboard'
import AccountingDasboard from '@components/StudentDasboard'

const Home: FC = () => {
  return (
    <>
      <PageTitle>Home</PageTitle>
    </>
  )
}

export {Home}
