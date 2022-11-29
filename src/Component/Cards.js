import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CarsData'
import {useDispatch} from 'react-redux'
import {ADD} from '../redux/actions/action'
import './style.css'

const Cards =()=>{
	const [data,setData]=useState(Cardsdata)
	// console.log(data)

	const dispatch = useDispatch();
	const send =(e)=>{
		// console.log(e)
		dispatch(ADD(e))

	}


	return(
		<>
		<div className="container mt-4">
			<h2 className="text-center"> Add to cart Project</h2>
			<div className="row">
			{data.map((element,id)=>{
				const {rname,imgdata,price}=element
				return(
				<>
				<Card className="col-md-4 card_style mb-4 px-4" key={id} style={{border:"none" }}>
			      <Card.Img variant="top" src={imgdata} style={{ height: '16rem' }} className="mt-3"/>
			      <Card.Body>
			        <Card.Title>{rname}</Card.Title>
			        <Card.Text>
			          Price : ₹ {price}
			        </Card.Text>
			        <div className="button_div">
			        	<Button variant="primary" className="col-lg-12" onClick={()=>send(element)}>Add to Cart</Button>
			        </div>
			        
			      </Card.Body>
			    </Card>
				</>
				)
			})
		}
				
			</div>
		</div>
		</>


)
}



export default Cards