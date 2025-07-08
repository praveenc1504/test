import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Own_test from './Own-test/Own_test.jsx'
import Random_test from './Random_test/Random_test.jsx'
import Login from './Login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="own-test" element={<Own_test />} />
        <Route path="random-test" element={<Random_test/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
