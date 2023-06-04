import React, { useEffect, useState } from 'react'
import './style.css'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/Actions/action';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastFoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Drawer,Box,Divider,Typography,Hidden,IconButton,Button, AppBar, Toolbar,TextField, InputBase} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ContactsIcon from '@mui/icons-material/Contacts';
import SearchIcon from '@mui/icons-material/Search';




const Header = () => {

    const [mobileopen, setMobileopen] = useState(false);

  
    const handleDrawerToggle = () => {
      setMobileopen(!mobileopen)
    }
     
      //menu drawer for mobile view
      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" ,mt:4}}>
          <Typography color="black" variant='h6' component="div" sx={{ flexGrow: "1", width: 200 }}>
         
            Sam Restaurant   <FastFoodIcon /></Typography>

          <ul className='mobile-menu'>
            <Divider />
        
                <li>
                  <Link to={"/"} >Home</Link>
                  <HouseIcon style={{color:"blue"}} /><Divider />
                </li> 
                <li>
                  <Link to={"/menu"}>Menu</Link>
                  <LunchDiningIcon style={{color:"blue"}}/><Divider />
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                  <ContactsIcon style={{color:"blue"}}/><Divider />
                </li>
                </ul>
               

        </Box>
      )


    const [price,setPrice] = useState(0);

        const getdata = useSelector((state)=> state.cartreducer.carts);
        // console.log(getdata);

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
   
  
    const dlt = (id)=>{
        dispatch(DLT(id))
    }


    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    return (
    
        <>
    <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "gold" }}>
          <Toolbar>
         
            <Typography className='logo-name' color="black" variant='h6' component="div" sx={{ flexGrow: "1" }}>
             Sam Restaurant  <FastFoodIcon /> </Typography>
           

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
          
              <ul className='nav-menu'>

                <li>
                  <Link to={"/"} >Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                
                <li>
                  <Link to={"/contact"}>ContactUs</Link>
                </li>
                 
            </ul>
            </Box>
            
        

                  <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} sx={{cursor:"pointer"}} >
                        <ShoppingCartIcon sx={{ color: "black" ,cursor:"pointer"}}/>
                  </Badge>

                    <IconButton color='inherit' aria-label='open drawer' edge="start"
                     sx={{ mr: 2, display: { sm: "none" } }}
                     onClick={handleDrawerToggle}>
                     <MenuIcon style={{color:"black",marginLeft:"15px"}} />
                   </IconButton>

          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer variant="temporary" open={mobileopen} onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}>
            {drawer}
          </Drawer>
        </Box>    

      </Box>

                <Menu 
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }} >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Item Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                            <DeleteOutlineIcon style={{color:"red",cursor:"pointer"}}/>
                                                            </p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                        
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total :₹ {price} 
                                    <a  href='/placeOrder'>
                                    <Button type='submit' sx={{color:"black",display:"flex"}}  variant='contained'>Place order</Button></a>
                                    </p>
                                </tbody>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"20rem",position:"relative"}}>
                  
                    <ClearIcon onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:20,cursor:"pointer"}}/>
                    
                    <p style={{fontSize:20}}>Your carts is empty</p>
                    <img src="https://media.tenor.com/8klrp86awEYAAAAC/cart.gif" alt=""
                     className='emptycart_img' style={{width:"5rem",padding:8}} />
                   </div>
                    }

                </Menu>

        </>
    )
}


export default Header;
