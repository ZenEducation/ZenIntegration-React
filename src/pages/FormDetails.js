import React from 'react'
import style from '../style/formDetails.module.css';
import {fetchTodo} from '../api/todo';
const FormDetails = () => {
  const data = [
    {name: 'bhavya',
    email: 'bhavya@gmail.com',
    message: 'hey this is a message'
    },
    {
      name: 'harsh',
      email: 'harsh@gmail.com',
      message: "message by harsh"
    },
    {
      name: 'kalika',
      email: 'kalika@gmail.com',
      message: 'message by kalika'
    }
  ]

 const fetchData = async()=> {
  const data = await fetchTodo();
  console.log("fetched data", data);
 }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Message</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=> (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
      <button onClick={fetchData}>fetch data</button>
    </div>
  )
}

export default FormDetails