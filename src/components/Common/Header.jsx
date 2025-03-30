import React from 'react'

const Header = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div>
          <img src="/logo.png" alt="" className="h-20" />
        </div>
        <div>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600">
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
