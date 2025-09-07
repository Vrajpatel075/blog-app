import React from 'react'
import { useBlog } from './context/Blog.jsx';
import Card from 'react-bootstrap/Card';
import { Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Blogs() {
      const [data]=useBlog()
      console.log(data)
      let navigate=useNavigate()
  return (
     <div>
    
       <Container>
<div className='row row-cols-1 row-cols-md-4 g-4 mt-4'>
{
 
    data.map((d,i)=>{
      return(
      <Card style={{ width: '18rem' }} className='h-180'>
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
    })
  }
</div>
    <Col>
    
    </Col>
    </Container>
  </div>
  )
}

export default Blogs