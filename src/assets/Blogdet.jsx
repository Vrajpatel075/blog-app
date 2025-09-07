import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function Blogdet() {
    const location=useLocation()
    console.log(location)
    let blog=location.state
    let navigate=useNavigate();
  return (
    <div>
        <Container>
    <div className='text-center m-2' >
         <i className='fa-solid fa-arrow-left float-start text-dark fs-4' onClick={()=>navigate("/")}> H O M E</i>
       <Card.Img variant='top' src={blog.image} className='h-50 w-50 p-5'/>
       <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
            topic : {blog.catgeory}
        </Card.Text>
        <article className='fs-5 text-primary'> 
            {blog.description}
        </article>
      </Card.Body>
    </div>
        </Container>
    </div>
  )
}

export default Blogdet