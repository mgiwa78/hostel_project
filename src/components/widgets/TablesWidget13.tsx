/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '@helpers/index'

type PlanMap = {
  Breakfast: string
  Lunch: string
  Dinner: string
}
const planMap: PlanMap = {
  Breakfast: 'success',
  Lunch: 'warning',
  Dinner: 'primary',
}
type Data = {
  MatricNumber: number
  Student: string
  Date: string
  'Meal plan': string
  'Plan Progress': string
  Type: 'Breakfast' | 'Lunch' | 'Dinner'
  'Meal details': string
}

type Props = {
  className: string
  data: Array<Data>
}

const TablesWidget13: React.FC<Props> = ({className, data}) => {
  return (
    <>
      <div className='row flex justify-between items-center'>
        <div className='col-lg-12 flex justify-between items-center mt-5'>
          <div className=' flex gap-3'>
            <div className='filters btn btn-light-info'>All time</div>
            <div className='filters btn btn-light-info'>Current Session</div>
          </div>
          <div className='d-flex align-items-center position-relative my-1'>
            <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
            <input
              type='text'
              data-kt-user-table-filter='search'
              className='form-control form-control-solid w-250px ps-14'
              placeholder='Search Student'
              onChange={(e) => null}
            />
          </div>
        </div>
      </div>
      <div
        className='card-body mt-5 bg-white border-gray-200'
        style={{
          border: '1px solid ',
          borderRadius: '8px',
          boxShadow:
            '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        }}
      >
        <div className='table-responsive'>
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            <thead className='bg-gray-50 '>
              <tr style={{fontSize: '14px'}} className='fw-bold text-muted w-full'>
                <th className='w-65px flex justify-center items-center'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px '>Student</th>
                <th className='min-w-140px'>Date</th>
                <th className='min-w-120px'>Meal plan</th>
                <th className='min-w-120px'>Plan Progress</th>
                <th className='min-w-120px'>Type</th>
                <th className='min-w-120px'>Meal deatils</th>
                <th className='min-w-120px text-center'>Download</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data.map((studentData) => (
                <tr>
                  <td className='text-center px-6'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input widget-13-check'
                        type='checkbox'
                        value='1'
                      />
                    </div>
                  </td>
                  <td>
                    <span className='text-[#274193] font-bold text-hover-primary d-block mb-1 fs-3'>
                      {studentData.Student}
                    </span>
                    <span className='text-muted fw-semibold text-muted d-block text-[14px]'>
                      {studentData.MatricNumber}
                    </span>
                  </td>
                  <td>
                    <span className='text-muted fw-semibold text-muted  text-[16px]'>
                      {studentData.Date}
                    </span>
                  </td>
                  <td>
                    {' '}
                    <span className='text-muted fw-semibold text-muted  text-[16px] '>
                      {' '}
                      {studentData['Meal plan']}
                    </span>
                  </td>
                  <td className=''>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='mb-2 w-100 text-center'>
                        <span className='text-muted me-2 fs-7 fw-semibold'>
                          {' '}
                          {studentData['Plan Progress']}
                        </span>
                      </div>
                      <div className='progress h-6px w-100'>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{width: studentData['Plan Progress']}}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className='text-dark fw-bold text-hover-primary fs-6'>
                    {' '}
                    <span className={`badge badge-light-${planMap[studentData.Type]}`}>
                      {studentData.Type}
                    </span>
                  </td>
                  <td>
                    {' '}
                    <span className='fw-semibold  d-block fs-4 text-[#192C66]'>
                      {studentData['Meal details']}
                    </span>
                  </td>
                  <td className='text-center'>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTIcon iconName='switch' className='fs-3' />
                    </a>
                    {/* <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTIcon iconName='pencil' className='fs-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTIcon iconName='trash' className='fs-3' />
                    </a> */}
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </>
  )
}

export {TablesWidget13}
