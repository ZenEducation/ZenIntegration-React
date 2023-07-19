import React from 'react'
import Form from './pages/Form';
import FormDetails from './pages/FormDetails';
import './app.css';
import { createBrowserRouter, Outlet, RouterProvider,ScrollRestoration } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Form/>
      },
      {
        path: '/formDetails',
        element: <FormDetails/>
      }
    ]
  }
])

const App = () => {

  return (
    <div>
      <RouterProvider router ={Router}/>
    </div>
  )
}

export default App