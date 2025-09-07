import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBlog } from './context/Blog'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'

function Reactblog() {
   let[data]=useBlog()
    let navigate=useNavigate()
  return (
    <div>
      <Container className='row text-center m-auto p-5 '>
        {
          data.map((d,i)=>{
            if(d.catgeory==="REACT"){
            return(
              <Card style={{ width: '18rem' }} className='h-180 m-5'>
        <Card.Img variant='top' src={d.image} className='h-75 w-100'/>
      <Card.Body>
        <Card.Title>{d.title}</Card.Title>
        <Card.Text>
            topic : {d.catgeory}
        </Card.Text>
        <i className='fa-solid fa-arrow-right float-end text-dark fs-4' onClick={()=>navigate("/Blogdet",{state:d})}></i>
      </Card.Body>
    </Card>
            )
          }})
        }
      </Container>
    </div>
  )
}

export default Reactblog