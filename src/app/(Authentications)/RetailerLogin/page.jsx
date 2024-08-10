"use client"
import React from 'react'
import LoginForm from './LoginForm'
import NavbarMain from '@/app/Components/Navbar/NavbarMain'
import Footer from '@/app/Components/Footer/Footer'
import { useAuth } from '@/app/Context/AuthContext'
import {toast,Toaster} from 'react-hot-toast'
import { useRouter } from 'next/navigation'

function page() {
  const { user } = useAuth();
  if (user) {
    toast("already logged in");
    useRouter().push('/')
    return null;

  }
  return (
    <>
    <Toaster/>
    <NavbarMain/>
    <div className='min-h-[70vh]'><LoginForm/></div>
    <Footer/></>
  )
}

export default page