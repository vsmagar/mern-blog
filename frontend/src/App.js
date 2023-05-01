import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BlogCard, Navbar } from './components'
import { Category, ForgetPassword, Home, Login, Pagenotfound, Protected, Register, ResetPassword } from './pages'
import { Account, dashboard } from './pages/user'
import Dashboard from './pages/user/Dashboard'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/account' element={<Protected element={<Account />} />} />
          <Route path='/dashboard' element={<Protected element={<Dashboard />} />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
