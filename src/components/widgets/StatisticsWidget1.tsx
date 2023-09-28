/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../helpers'

type Props = {
  className: string
  image: string
  title: string
  time: string
  description: string
}

const StatisticsWidget1: React.FC<Props> = ({className, image, title, time, description}) => {
  return (
    <div
      className={`card bgi-no-repeat ${className} border-solid border-2 border-gray-200`}
      style={{
        border: '1px solid ',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        backgroundPosition: 'right bottom',
        backgroundSize: '30% auto',
        backgroundImage: `url(${toAbsoluteUrl('/media/design/graph.svg')})`,
      }}
    >
      {/* begin::Body */}
      <div className='card-body'>
        <span className='card-title fw-bold text-black text-hover-primary text-[16px]'>
          {title}
        </span>

        <div className='font-bold  mt-6 text-black text-[36px]'>{time}</div>

        <p
          className='text-dark-75 font-bold text-muted fs-5 m-0 text-[14px]'
          dangerouslySetInnerHTML={{__html: description}}
        ></p>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget1}
