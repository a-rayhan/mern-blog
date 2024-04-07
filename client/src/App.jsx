import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elemenet={<Home />} />
        <Route path="/about" elemenet={<About />} />
        <Route path="/sign-in" elemenet={<SignIn />} />
        <Route path="/sign-up" elemenet={<SignUp />} />
        <Route path="/dashboard" elemenet={<Dashboard />} />
        <Route path="/projects" elemenet={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
