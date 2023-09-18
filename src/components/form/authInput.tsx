import React from 'react'
type AuthInputTypes = {
  placeholder: string
  name: string
  autoComplete: string
  value?: string
  type: string
  iconPath: string
  handleChange: Function
}
const AuthInput = ({
  placeholder,
  name,
  autoComplete,
  type,
  iconPath,
  value,
  handleChange,
}: AuthInputTypes) => {
  return (
    <div
      style={{
        height: '56px',
        backgroundColor: '#F7F8F9',
        border: '1px solid  #E8ECF4',
        borderRadius: '5px',
      }}
      className='input-group input-group-solid mb-5 border-none w-full'
    >
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(e) => handleChange(e)}
        value={value}
        autoComplete={autoComplete}
        className='form-control bg-transparent w-full h-full  border-none'
        style={{
          border: '0px solid  #E8ECF4',
        }}
      />
      {iconPath ? (
        <span className='input-group-text'>
          <img src={iconPath} alt='' />
        </span>
      ) : (
        ''
      )}
    </div>
  )
}

export default AuthInput
