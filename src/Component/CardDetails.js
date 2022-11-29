import React ,{useState} from 'react'
import {useEffect} from 'react'

import Table from 'react-bootstrap/Table'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import {DLT,ADD,REMOVE} from '../redux/actions/action'

const CardDetails =()=>{
 const [data,setdata]=useState([]);


const  {id}=useParams();
console.log(id)


const history=useNavigate();


 const dispatch=useDispatch();

// add data

	const send =(e)=>{
		// console.log(e)
		dispatch(ADD(e))

	}


 const dlt =(id)=>{
  dispatch(DLT(id));
  history("/");
}


// remove one
const  remove=(item)=>{
	dispatch(REMOVE(item))

}



const  getdata = useSelector((state)=> state.cartreducer.carts);
  console.log(getdata)

  const compare =()=>{
  	let comapredata= getdata.filter((e)=>{
  		return e.id== id
  	});
  	setdata(comapredata)
  }

  useEffect(()=>{
  	compare();
  },[id])

	return(
		<>
			<div className="container mt-2">
				<h2 className="text-center"> Items Details Page</h2>
				<section className="container mt-2">
				<div className="iteamsdetails">
				{
					data.map((element)=>{
						return(
						<>
						<div className="items_img">
						<img src={element.imgdata} />
					</div>
					<div className="details">
						<Table>
							<tr>
								<td>
								<p><strong>Restaurant</strong> : {element.rname}
								</p>
								<p><strong>Price</strong> : ₹ {element.price}
								</p>
								<p><strong>Dishes</strong> : {element.address}
								</p>
								<p><strong>Total</strong> : ₹ {element.price * element.qnty}
								</p>
								<div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
								<span style={{fontSize:24}} onClick={element.qnty <=1 ? ()=>dlt(element.id):()=>remove(element)}>-</span>
								<span style={{fontSize:22}}>{element.qnty}</span>
								<span style={{fontSize:24}} onClick={()=>send(element)}>+</span>
								</div>
								</td>
								<td>
									<p><strong>Restaurant :</strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{element.rating} ★</span> </p>
									<p><strong>Order Review : </strong><span>{element.somedata}</span> </p>
									<p><strong>Remove : </strong><span ><i className="fas fa-trash" onClick={()=>dlt(element.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i></span> </p>
								</td>
							</tr>
						</Table>
					</div>
						</>
						)
					})
				}

					
				</div>
				</section>
			</div>
		</>


)
}



export default CardDetails