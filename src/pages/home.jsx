import React, { useEffect, useState } from 'react'
import Navbar from '../layouts/navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  const northwind = "https://northwind.vercel.app/api/products"

  function fetchData() {
    fetch(northwind)
      .then(res => res.json())
      .then(items => setData(items))
  }

  useEffect(() => {
    fetchData()
  }, [data])
  


  return (
    <>
      <Navbar />
      {data && data.map(item=>{
        return(
          <ul>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <Link to={`detail/${item.id}`}>asd</Link>
          </ul>
          )
      })}
    </>
  )
}

export default Home