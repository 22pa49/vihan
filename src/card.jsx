import axios from "axios"
import { Card } from "react-bootstrap"
import { useState } from "react"
const Card=(props)=>{
  const[name,setName]=useState([])
  const GetData=async()=>{
    const data=await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log('data',data.data)
    setName(data.data)
  }
  return(
    <>
    <button onClick={()=>GetData()}>
      get data
    </button>
    {/*{<p>{JSON:Stringfy(name)}</p>}*/}
    {name.map((value)=>{
      return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <p>{value.title}</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )
      // <p>{value.title}</p>
    })
  }
<input type='text'onChange={(e)=>console.log(e.target.value)}/>
    </>
  )
}
export default Card