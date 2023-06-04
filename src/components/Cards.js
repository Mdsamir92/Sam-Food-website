import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/Actions/action';
import {Box,InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Cards = () => {

  const[search,setSearch] = useState("")

  const [data, setData] = useState(Cardsdata);
  // console.log(data); 


  const dispatch = useDispatch();


  const send = (e)=>{
    console.log(e);
    dispatch(ADD(e));
  }
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
    
};

  

  return (
    <div className='container mt-3'>
      <h2 style={{textAlign:"center",marginTop:"70px"}}>Order your food now...</h2>
     
      <div style={{display:"grid",placeItems:"center"}}>
          <Box className="search" sx={{mt:2,backgroundColor:"pink",width:"25%",position:"relative",borderRadius:"10px",
            }}>
             
             <SearchIcon  className='searchIcon' sx={{color:"black",cursor:"pointer"}}/>
             
             <InputBase placeholder='Search' className='input'  
             inputProps={{"aria-details":"search"}}  onChange={handleSearch} />
             </Box>
             </div>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.filter((element)=>{
   if(element === "") {
    return element;
   } 
   else{
    return(element.rname.toLowerCase().includes(search)) 
   }
  }).map((element, id) => {
            return (
              <>
                <Card key={id} style={{ width: '18rem',border:"none" }} className="mx-3 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"15rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards