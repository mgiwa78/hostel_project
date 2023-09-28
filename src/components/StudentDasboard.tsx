import {PageTitle} from '@layouts/core'
import React, {useEffect, useState} from 'react'
import {StatisticsWidget5} from './partials/widgets/StatisticsWidget5'
import {MixedWidget1} from './partials/widgets/MixedWidget1'
import RecentImpressions from './RecentImpressions'
import get from '@lib/get'
import {useSelector} from 'react-redux'
import {selectUserToken} from '@stores/auth/authSlector'
import {StatisticsWidget1} from './widgets/StatisticsWidget1'
import {TablesWidget13} from './widgets/TablesWidget13'

const StudentDasboard = () => {
  const userToken = useSelector(selectUserToken)
  const [productsCount, setProductCount] = useState(0)
  const [categoriesCount, setCategorieCount] = useState(0)
  const [usersCount, setUsersCount] = useState(0)

  // const fetchDashboardData = async () => {
  //   const products = await get('products', userToken)
  //   const categories = await get('categories', userToken)
  //   const users = await get('users', userToken)

  //   if (products) {
  //     setProductCount(products.length)
  //   }
  //   if (categories) {
  //     setCategorieCount(categories.length)
  //   }
  //   if (users) {
  //     setUsersCount(users.length)
  //   }
  // }

  // useEffect(() => {
  //   fetchDashboardData()
  // }, [])
  type Data = {
    MatricNumber: number
    Student: string
    Date: string
    'Meal plan': string
    'Plan Progress': string
    Type: 'Breakfast' | 'Lunch' | 'Dinner'
    'Meal details': string
  }

  const studentData: Array<Data> = [
    {
      MatricNumber: 211212007,
      Student: 'John Doe',
      Date: '2023-09-28',
      'Meal plan': 'Plan A',
      'Plan Progress': '75%',
      Type: 'Breakfast',
      'Meal details': 'Scrambled eggs, toast, coffee',
    },
    {
      MatricNumber: 211212008,
      Student: 'Jane Smith',
      Date: '2023-09-28',
      'Meal plan': 'Plan B',
      'Plan Progress': '90%',
      Type: 'Lunch',
      'Meal details': 'Grilled chicken, salad, rice',
    },
    {
      MatricNumber: 211212009,
      Student: 'Sam Johnson',
      Date: '2023-09-28',
      'Meal plan': 'Plan C',
      'Plan Progress': '60%',
      Type: 'Dinner',
      'Meal details': 'Spaghetti, meatballs, garlic bread',
    },
    {
      MatricNumber: 211212010,
      Student: 'Emily Brown',
      Date: '2023-09-29',
      'Meal plan': 'Plan D',
      'Plan Progress': '80%',
      Type: 'Breakfast',
      'Meal details': 'Pancakes, syrup, orange juice',
    },
    {
      MatricNumber: 211212011,
      Student: 'Michael Clark',
      Date: '2023-09-29',
      'Meal plan': 'Plan E',
      'Plan Progress': '70%',
      Type: 'Lunch',
      'Meal details': 'Grilled cheese sandwich, tomato soup',
    },
    {
      MatricNumber: 211212012,
      Student: 'Olivia Davis',
      Date: '2023-09-29',
      'Meal plan': 'Plan F',
      'Plan Progress': '85%',
      Type: 'Dinner',
      'Meal details': 'Salmon, quinoa, asparagus',
    },
    {
      MatricNumber: 211212013,
      Student: 'Ethan Evans',
      Date: '2023-09-30',
      'Meal plan': 'Plan G',
      'Plan Progress': '65%',
      Type: 'Breakfast',
      'Meal details': 'Oatmeal, berries, yogurt',
    },
    {
      MatricNumber: 211212014,
      Student: 'Sophia Garcia',
      Date: '2023-09-30',
      'Meal plan': 'Plan H',
      'Plan Progress': '95%',
      Type: 'Lunch',
      'Meal details': 'Caesar salad, grilled chicken',
    },
    {
      MatricNumber: 211212015,
      Student: 'Liam Harris',
      Date: '2023-09-30',
      'Meal plan': 'Plan I',
      'Plan Progress': '75%',
      Type: 'Dinner',
      'Meal details': 'Steak, mashed potatoes, green beans',
    },
    {
      MatricNumber: 211212016,
      Student: 'Ava Jackson',
      Date: '2023-10-01',
      'Meal plan': 'Plan J',
      'Plan Progress': '90%',
      Type: 'Breakfast',
      'Meal details': 'French toast, bacon, eggs',
    },
    {
      MatricNumber: 211212017,
      Student: 'Noah Johnson',
      Date: '2023-10-01',
      'Meal plan': 'Plan K',
      'Plan Progress': '60%',
      Type: 'Lunch',
      'Meal details': 'Pasta salad, vinaigrette dressing',
    },
    {
      MatricNumber: 211212018,
      Student: 'Emma Martinez',
      Date: '2023-10-01',
      'Meal plan': 'Plan L',
      'Plan Progress': '80%',
      Type: 'Dinner',
      'Meal details': 'Shrimp stir-fry, brown rice',
    },
    {
      MatricNumber: 211212019,
      Student: 'Isabella Taylor',
      Date: '2023-10-02',
      'Meal plan': 'Plan M',
      'Plan Progress': '70%',
      Type: 'Breakfast',
      'Meal details': 'Yogurt parfait, granola',
    },
    {
      MatricNumber: 211212020,
      Student: 'Mia Wilson',
      Date: '2023-10-02',
      'Meal plan': 'Plan N',
      'Plan Progress': '85%',
      Type: 'Lunch',
      'Meal details': 'Caprese sandwich, mixed greens',
    },
    {
      MatricNumber: 211212021,
      Student: 'Lucas Smith',
      Date: '2023-10-02',
      'Meal plan': 'Plan O',
      'Plan Progress': '75%',
      Type: 'Dinner',
      'Meal details': 'Grilled salmon, quinoa',
    },
  ]

  return (
    <>
      <div className='row text-gray-500'>
        <h1 className=' text-[30px] font-bold '>Welcome back, Olivia</h1>
        <p className=' text-[16px] '>Track, manage and forecast your customers and orders.</p>
      </div>

      <div className='row g-5 mt-1 g-xl-2'>
        <div className='col-xl-6'>
          <StatisticsWidget1
            className='card-xl-stretch mb-xl-8'
            image='abstract-4.svg'
            title='Total Students'
            time='2,420'
            description='+40% vs last month'
          />
        </div>

        <div className='col-xl-6'>
          <StatisticsWidget1
            className='card-xl-stretch mb-xl-8'
            image='abstract-2.svg'
            title='Meals Generated'
            time='1,210'
            description='-10% vs last month'
          />
        </div>
      </div>
      <TablesWidget13 data={studentData} className='mb-5 mb-xl-8' />
      {/* <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='row g-5 g-xl-8'>
          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-xl-8'
              svgIcon='user'
              color='danger'
              iconColor='white'
              title={`${productsCount}`}
              titleColor='white'
              description='Products'
              descriptionColor='white'
            />
          </div>

          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-xl-8'
              svgIcon='cheque'
              color='primary'
              iconColor='white'
              title={`${categoriesCount}`}
              titleColor='white'
              description='Categories'
              descriptionColor='white'
            />
          </div>

          <div className='col-xl-4'>
            <StatisticsWidget5
              className='card-xl-stretch mb-5 mb-xl-8'
              svgIcon='chart-simple-3'
              color='success'
              iconColor='white'
              title={`${usersCount}`}
              titleColor='white'
              description='Users'
              descriptionColor='white'
            />
          </div>
        </div>{' '}
        <div className='row mt-0 '>
          <div className='col-12'>
            {' '}
            <RecentImpressions />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default StudentDasboard
