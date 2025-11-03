import React from 'react'

const page = () => {
  return (
    <div>
      Admin login
      <p>
        Feel free to login as an Admin
      </p>
    </div>
  )
}

export default page

export async function generateMetadata({ parms }) {
  return {
    title: 'AdminLogin Facebook -  connect with friends and world around you',
  }
}