import React,{useState} from 'react'
import {useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table'
import {NavLink} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from './cart.gif';
import {DLT} from '../redux/actions/action'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const Header =()=>{

const [price,setPrice]=useState(0);

const  getdata = useSelector((state)=> state.cartreducer.carts);
  console.log(getdata)
  
  const dispatch=useDispatch();


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const dlt =(id)=>{
  dispatch(DLT(id))
}


const total=()=>{
  let price=0;
  getdata.map((ele,k)=>{
    price =ele.price * ele.qnty + price
  });
  setPrice(price);
};

useEffect(()=>{
  total();
},[total])

	return(
		<>
		<Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-light mx-2 text-decoration-none">Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-light text-decoration-none">Home</NavLink>
          </Nav>
          <Badge badgeContent={getdata.length} color="primary"
          id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
      		<i class="fa-solid fa-cart-shopping text-white" style={{fontSize:25,cursor:"pointer"}}></i>
    	  </Badge>

          
        </Container>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >

      {

        getdata.length ?
        <div className='card_details' style={{width:"24rem",padding:10}}>
          <Table>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Restaurant Name</th>
              </tr>
              </thead>
              <tbody>
              {
                getdata.map((e)=>{
                  return(
                    <>
                    <tr>
                      <td>
                        <NavLink to={`/cart/${e.id}`}  onClick={handleClose}>
                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} />
                        </NavLink>
                      </td>
                      <td>
                        <p>{e.rname}</p>
                        <p>Price : ₹ {e.price}</p>
                        <p>Quantity : ₹ {e.qnty}</p>
                        <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                          <i className="fas fa-trash smalltrash" ></i>
                        </p>
                      </td>
                      <td className="mt-5" style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                      <i className="fas fa-trash largetrash"></i>
                      </td>
                    </tr>
                    </>)
                })
              }
              <p className="text-center">Total : ₹ {price} </p>
              </tbody>

          </Table>
        </div>:
        <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:"10px",position:"relative"}}>
      <i className='fas fa-close smallclose' 
      onClick={handleClose}
      style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
        <p style={{fontSize:22}}>You Car is empty</p>
        <img src={Image} alt='' className="emptycart_img" style={{width:"5rem",padding:"10px"}}/>
        </div>

      }
      
      </Menu>
      </Navbar>
		</>

		)
}



export default Header