import React from 'react'
type AuthInputTypes = {
  placeholder: string
  name: string
  autoComplete: string
  type: string
  iconPath: string
}
const AuthInput = ({placeholder, name, autoComplete, type, iconPath}: AuthInputTypes) => {
  return (
    <div
      style={{height: '56px', backgroundColor: '#F7F8F9', border: '1px solid  #E8ECF4'}}
      className='input-group input-group-solid mb-5'
    >
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        className='form-control bg-transparent'
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
