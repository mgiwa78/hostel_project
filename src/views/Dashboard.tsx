/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {PageTitle} from '../layouts/core'
import {useSelector} from 'react-redux'
import {selectUserAuth} from '@stores/auth/authSlector'
import StudentDasboard from '@components/StudentDasboard'
import AccountingDasboard from '@components/StudentDasboard'

const Dashboard: FC = () => {
  const userAuth = useSelector(selectUserAuth)
  return <StudentDasboard />
}

export {Dashboard}
