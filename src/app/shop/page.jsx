"use client"
import ShopPage from '@/Components/Shop'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useUserStore from '@/store/Userstore'

function Page() {
  const router = useRouter()
  const {isLoggedIn} = useUserStore()
  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login if the user is not logged in
      router.push('/login');
    }
  }, [isLoggedIn , router])
  
  return (
    <div>
      <ShopPage/>
    </div>
  )
}

export default Page
