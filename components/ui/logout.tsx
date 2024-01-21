"use client"
import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from './button'
import { redirect } from 'next/navigation'
const Logout = () => {
    const signout =  () => {
         signOut()
        redirect('/login')
    }
  return (
    <Button onClick={signout}> Signout</Button>
  )
}

export default Logout
