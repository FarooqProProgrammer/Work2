import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from '../pages/Todo'

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
            <Route  path="/" element={<Todo />}/>
      </Routes>
    </BrowserRouter>
  )
}
